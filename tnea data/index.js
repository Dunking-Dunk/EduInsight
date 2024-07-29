const express = require('express');
const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Function to upload JSON data to Firestore
const uploadJsonToFirestore = async (filePath, collectionName) => {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    if (!Array.isArray(data)) {
      throw new Error('Parsed data is not an array');
    }

    const collectionRef = db.collection(collectionName);

    let batch = db.batch();
    let counter = 0;
    data.forEach((doc, index) => {
      const docRef = collectionRef.doc();
      batch.set(docRef, doc);

      // Commit the batch every 500 documents
      if (++counter === 500) {
        batch.commit();
        batch = db.batch();
        counter = 0;
      }
    });

    // Commit the last batch
    if (counter > 0) {
      await batch.commit();
    }
    
    console.log(`Data uploaded successfully from ${filePath}`);
  } catch (error) {
    console.error(`Error uploading data from ${filePath}:`, error);
  }
};

// Endpoint to trigger upload
app.get('/upload', async (req, res) => {
  const folderPath = path.join(__dirname, 'data'); // Folder containing JSON files

  fs.readdir(folderPath, async (err, files) => {
    if (err) {
      return res.status(500).send('Error reading folder.');
    }

    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const collectionName = file.replace(/\s+/g, '').replace('.json', '');
      await uploadJsonToFirestore(filePath, collectionName);
    }
    res.send('Data uploaded successfully.');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

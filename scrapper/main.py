import requests
import json

BASE_URL = "https://src.udiseplus.gov.in/locateSchool"

state_details_url = f"{BASE_URL}/state"
states = requests.get(state_details_url)
states_data = states.json()

# captcha_response = requests.get('https://src.udiseplus.gov.in/searchCaptcha')
# with open('captcha_image.png', 'wb') as file:
#     file.write(captcha_response.content)

# Open ur browser and go to the BSE_URL, get captcha from there and enter here, also don't forgot to change JSESSIONID

captcha_text = input('Enter captcha: ')
print('You entered: ' + captcha_text)

headers = {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'Accept-Language': 'en-US,en;q=0.7',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'JSESSIONID=A~3F9B623DFB26625193B2A5BAFFE597FC',
    'Host': 'src.udiseplus.gov.in',
    'Origin': 'https://src.udiseplus.gov.in',
    'Referer': 'https://src.udiseplus.gov.in/locateSchool/schoolSearch',
    'Sec-Ch-Ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Brave";v="126"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Gpc': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
}

final_data = []
count = 0
for state in states_data:
    district_details_url = f"{BASE_URL}/getDistrict"
    district_response = requests.post(district_details_url, data={'stateId': state['stateId']}, headers=headers)
    districts_data = district_response.json()
    
    for district in districts_data:
        block_details_url = f"{BASE_URL}/getBlock?districtId={district['districtId']}"
        blocks_response = requests.get(block_details_url, headers=headers)
        blocks_data = blocks_response.json()
        
        for block in blocks_data:
            school_details_url = f"{BASE_URL}/searchSchool"
            school_response = requests.post(
                school_details_url,
                data={
                    'stateName': state['stateId'],
                    'districtName': district['districtId'],
                    'blockName': block['eduBlockId'],
                    'villageId': '',
                    'clusterId': '',
                    'categoryName': 0,
                    'managementName': 0,
                    'captcha': captcha_text,
                    'Search': 'search'
                },
                headers=headers
            )
            schools_data = school_response.json()
            
            final_data.append({
                'state': state['stateName'],
                'district': district['districtName'],
                'schools': schools_data
            })
            count += 1
        print('Completed: ', count)

with open('schools_data.json', 'w') as json_file:
    json.dump(final_data, json_file, indent=4)

print('Finished')
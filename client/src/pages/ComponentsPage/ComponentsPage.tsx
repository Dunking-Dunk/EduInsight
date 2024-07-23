import CollegeCard from "../../components/CollegeCard/CollegeCard";
import SelectBox from "../../components/SelectBox/SelectBox";
import TextInput from "../../components/TextInput/TextInput";
import ButtonOne from "../../components/ButtonOne/ButtonOne";
import ButtonSelectBox from "../../components/ButtonSelectBox/ButtonSelectBox";

const ComponentsPage = () => {
    return(
        <div className="flex flex-col justify-evenly items-center bg-slate-400 p-4">
            <div className="max-w-80">
                <TextInput type="text" placeholder="This is the text input" />
                <br />
                <SelectBox 
                    selectBoxLabel="Select Something"
                    selectBoxItems={['A', 'B', 'C', 'D']}
                />
                <br />
                <br />
                <ButtonOne 
                    buttonLabel="Button"
                    isFilled={true}
                />
                <br />
                <br />
                <ButtonOne 
                    buttonLabel="Button"
                    isFilled={false}
                />
                <br />
                <br />
                <ButtonSelectBox
                    label="Button"
                    items={['A', 'B']}    
                />
            </div>
            <br />
            <CollegeCard 
                collegeRank={1}
                collegeName="Anna University, CEG Campus"
                collegeLocation="Chennai"
                collegeDept="Computer Science And Engineering"
                collegeMinCutoff={198}
                collegeMaxCutoff={199}
                collegeCommunity="OC"
            />
        </div>
    )
}


export default ComponentsPage;
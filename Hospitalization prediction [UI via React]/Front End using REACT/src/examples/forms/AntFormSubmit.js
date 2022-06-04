import React, { useState } from "react";
import {
  Card,
  Typography,
  Form,
  Input,
  Select,
  Radio,
  Button,
  Divider,
} from "antd";
import { makeModelsPost } from '../../api2/api';

const { Title } = Typography;
const { Option } = Select;

const formValuesInitialState = {
  gender: "",
  age: "",
  num_callouts: "",
  num_diagnoses: "",
  num_procedures:"",
  num_cptevents:"",
  num_inputevents:"",
  num_labevents:"",
  num_microbiologyevents:"",
  num_noteevents:"",
  num_outputevents:"",
  num_procedureevents:"",
  num_transfers:"",
  num_chartevents:"",
  expired:"",
  admission_type: "",
  admission_diagnosis:"",
  insurance:"",
  religion:"",
  marital_status:"", 
  ethnicity:"",
  admission_origin:""
};

const Models = () => {
  const [formValues, setFormValues] = useState(formValuesInitialState);
  const [models, setModels] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value); // Uncomment to view name/value pair
    setFormValues({ ...formValues, [name]: value });
  };
  const handleNumberInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value); // Uncomment to view name/value pair
    setFormValues({ ...formValues, [name]: parseInt(value)});
  };
  const handleSelectChange = (value) => {
    setFormValues({ ...formValues, selectField: value });
  };
  const handleMultipleSelectChange = (value) => {
    setFormValues({ ...formValues, multiplSelectField: value });
  };
  const handleSwitchChange = (value) => {
    setFormValues({ ...formValues, switchField: value });
  };
  const resetForm = () => {
    setFormValues(formValuesInitialState);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);

    // Make the POST HTTP request here
    // Sample POST file api/api.js
    makeModelsPost(formValues).then((responseData) => {
    console.log(responseData);  
      setModels(responseData);
    });
  };

  return (
    <Card>
      <Title>Prediction form</Title>
      <form>
      <Form.Item label="Gender">
          <Radio.Group
            name="gender"
            onChange={handleInputChange}
            value={formValues.gender}
          >
            <Radio value="M">Male</Radio>
            <Radio value="F">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Age">
          <Input
            placeholder="placeholder"
            name="age"
            value={formValues.age}
            onChange={handleNumberInputChange}
          />
        </Form.Item>
        <Form.Item label="Number of callouts">
          <Input
          type= "number"
            placeholder="placeholder"
            name="num_callouts"
            value={formValues.num_callouts}
            onChange={handleNumberInputChange}
          />
        </Form.Item>
        <Form.Item label="Number of diagnoses">
          <Input
            placeholder="placeholder"
            name="num_diagnoses"
            value={formValues.num_diagnoses}
            onChange={handleNumberInputChange}
          />
        </Form.Item>
        <Form.Item label="Number of procedures">
          <Input
            placeholder="placeholder"
            name="num_procedures"
            value={formValues.num_procedures}
            onChange={handleNumberInputChange}
          />
        </Form.Item> 
        <Form.Item label="Number of cptevents">
          <Input
            placeholder="placeholder"
            name="num_cptevents"
            value={formValues.num_cptevents}
            onChange={handleNumberInputChange}
          />
        </Form.Item> 
        <Form.Item label="Number of input events">
          <Input
            placeholder="placeholder"
            name="num_inputevents"
            value={formValues.num_inputevents}
            onChange={handleNumberInputChange}
          />
        </Form.Item>
        <Form.Item label="Number of lab events">
          <Input
            placeholder="placeholder"
            name="num_labevents"
            value={formValues.num_labevents}
            onChange={handleNumberInputChange}
          />
        </Form.Item> 
        <Form.Item label="Number of microbiology events">
          <Input
            placeholder="placeholder"
            name="num_microbiologyevents"
            value={formValues.num_microbiologyevents}
            onChange={handleNumberInputChange}
          />
        </Form.Item>    
        <Form.Item label="Number of note events">
          <Input
            placeholder="placeholder"
            name="num_noteevents"
            value={formValues.num_noteevents}
            onChange={handleNumberInputChange}
          />
        </Form.Item>    
        <Form.Item label="Number of output events">
          <Input
            placeholder="placeholder"
            name="num_outputevents"
            value={formValues.num_outputevents}
            onChange={handleNumberInputChange}
          />
        </Form.Item>  
        <Form.Item label="Number of procedure events">
          <Input
            placeholder="placeholder"
            name="num_procedureevents"
            value={formValues.num_procedureevents}
            onChange={handleNumberInputChange}
          />
        </Form.Item>    
        <Form.Item label="Number of transfers">
          <Input
            placeholder="placeholder"
            name="num_transfers"
            value={formValues.num_transfers}
            onChange={handleNumberInputChange}
          />
        </Form.Item>   
        <Form.Item label="Number of chart events">
          <Input
            placeholder="placeholder"
            name="num_chartevents"
            value={formValues.num_chartevents}
            onChange={handleNumberInputChange}
          />
        </Form.Item>    
        <Form.Item label="Expired">
          <Radio.Group
            name="expired"
            onChange={handleInputChange}
            value={formValues.expired}
          >
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </Radio.Group>
        </Form.Item>     
        <Form.Item label="Admission type">
          <Radio.Group
            name="admission_type"
            onChange={handleInputChange}
            value={formValues.admission_type}
          >
            <Radio value="EMERGENCY">Emergency</Radio>
            <Radio value="URGENT">Urgent</Radio>
            <Radio value="ELECTIVE">Elective</Radio>
            <Radio value="NEWBORN">Newborn</Radio>
          </Radio.Group>
        </Form.Item>   
        <Form.Item label="Admission diagnosis">
          <Input
            placeholder="Separate all diagnoses with ';' "
            name="admission_diagnosis"
            value={formValues.admission_diagnosis}
            onChange={handleInputChange}
          />
        </Form.Item>            
        <Form.Item label="Insurance">
          <Radio.Group
            name="insurance"
            onChange={handleInputChange}
            value={formValues.insurance}
          >
            <Radio value="Medicare">Medicare</Radio>
            <Radio value="Medicaid">Medicaid</Radio>
            <Radio value="Private">Private</Radio>
            <Radio value="Goverment">Goverment</Radio>
            <Radio value="Self Pay">Self Pay</Radio>
          </Radio.Group>
        </Form.Item>   
        <Form.Item label="Religion">
          <Radio.Group
            name="religion"
            onChange={handleInputChange}
            value={formValues.religion}
          >
            <Radio value="CATHOLIC">Catholic</Radio>
            <Radio value="JEWISH">Jewish</Radio>
            <Radio value="PROTESTANT QUAKER">Protestant Quaker</Radio>
            <Radio value="OTHER">Other Religion</Radio>
            <Radio value="NOT SPECIFIED">Not specified</Radio>
          </Radio.Group>
        </Form.Item>  
        <Form.Item label="Marital Status">
          <Radio.Group
            name="marital_status"
            onChange={handleInputChange}
            value={formValues.marital_status}
          >
            <Radio value="MARRIED">Married</Radio>
            <Radio value="SINGLE">Single</Radio>
            <Radio value="WIDOWED">Widowed</Radio>
            <Radio value="DIVORCED">Divorced</Radio>
            <Radio value="Not Specified">Not Specified</Radio>
          </Radio.Group>
        </Form.Item>  
        <Form.Item label="Ethnicity">
          <Radio.Group
            name="ethnicity"
            onChange={handleInputChange}
            value={formValues.ethnicity}
          >
            <Radio value="WHITE">White</Radio>
            <Radio value="CAUCASIAN">Caucasian</Radio>
            <Radio value="BLACK/AFRICAN AMERICAN">Black African American</Radio>
            <Radio value="OTHER">Other</Radio>
            <Radio value="NOT AVAILIABLE ETHNICITY">Not available ethnicity</Radio>
          </Radio.Group>
        </Form.Item>  
        <Form.Item label="Admission origin">
          <Radio.Group
            name="admission_origin"
            onChange={handleInputChange}
            value={formValues.admission_origin}
          >
            <Radio value="CLINIC REFERRAL">Clinic Referral</Radio>
            <Radio value="EMERGENCY ROOM ADMISSION">Emergency Room Admission</Radio>
            <Radio value="PHYSICAL REFERRAL">Physical Referral</Radio>
            <Radio value="Other">Other</Radio>
          </Radio.Group>
        </Form.Item>  


        <Form.Item>
          <Button type="secondary" onClick={resetForm}>
            Reset
          </Button>
          &nbsp;
          <Button type="primary" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form.Item>
      </form>

      <Divider />

      {models && (
        <div>
          <Title level={3}>Prediction</Title>
          {models['prediction']}
          {/* {JSON.stringify(models)} */}
        </div>
      )}
    </Card>
  );
};

export default Models;
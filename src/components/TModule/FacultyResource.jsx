import { useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import axios from "axios";
import { addRecordsResource } from "./API_Routes";

export default function FacultyResource() {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    T_ID: null,
    Username: currentUser?.Email,
    Department: "",
    FDP_Workshop_Name: "",
    eventName: "",
    Level: "",
    Topic: "",
    Organizer: "",
    Date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(addRecordsResource, formData);
    console.log("Response is : ", response.data);
  };

  return (
    <>
      <Card
        color="transparent"
        shadow={false}
        className="border border-gray-300 w-85 mx-auto p-2 my-2 rounded-md"
      >
        <Typography
          variant="h4"
          color="blue-gray"
          className="mx-auto underline underline-offset-2"
        >
          Faculty as Resource Person
        </Typography>

        <form className="mt-8 mb-2" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Name Of the Department
              </Typography>
              <Select
                size="lg"
                name="Department"
                label="Department"
                value={formData.Department}
                onChange={(value) =>
                  handleChange({
                    target: { name: "Department", value },
                  })
                }
              >
                <Option value="CS">CS</Option>
                <Option value="IT">IT</Option>
                <Option value="EnTC">EnTC</Option>
                <Option value="FE">FE</Option>
              </Select>
            </div>
          </div>

          <div className="mb-4 flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Name of FDP / Workshop / Other
              </Typography>
              <Input
                size="lg"
                name="FDP_Workshop_Name"
                value={formData.FDP_Workshop_Name}
                label="Name of FDP / Workshop / Other"
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Level
              </Typography>
              <Select
                size="lg"
                name="Level"
                value={formData.Level}
                label="Level"
                onChange={(value) =>
                  handleChange({
                    target: {
                      name: "Level",
                      value,
                    },
                  })
                }
                // onChange={handleOnChange}
              >
                <Option value="International">International</Option>
                <Option value="National">National</Option>
                <Option value="State">State</Option>
                <Option value="University">University</Option>
                <Option value="Department">College</Option>
              </Select>
            </div>
          </div>

          <div className="mb-4 flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Topic
              </Typography>
              <Input
                size="lg"
                name="Topic"
                value={formData.Topic}
                label="Topic"
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Organizer
              </Typography>
              <Input
                size="lg"
                name="Organizer"
                value={formData.Organizer}
                label="Organizer"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Date (DD-MM-YYYY)
              </Typography>
              <Input
                size="lg"
                name="Date"
                value={formData.Date}
                label="Date"
                type="date"
                onChange={handleChange}
              />
            </div>
          </div>

          <Button className="mt-4" fullWidth type="submit">
            Add Changes
          </Button>
        </form>
      </Card>
    </>
  );
}

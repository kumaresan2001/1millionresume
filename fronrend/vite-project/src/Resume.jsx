import "./App.css";
import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
// import { API } from "./global";
export function Resume() {
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [workExperienceColor, setWorkExperienceColor] = useState("white");

  // const[resume,setResume]=useState([])
  // const Fetch=()=>{
  //   return axiox.get(API).then((res)=>setResume(res.resume))
  // }

  useEffect(() => {
    // Fetch()

    setEducation([
      {
        id: "1",
        degree: "Bachelor of Science in Computer Science",
        college: "University of ABC",
        location: "Chicago, USA",
        graduationDate: "May 2019",
      },
      {
        id: "2",
        degree: "High School Diploma",
        college: "High School XYZ",
        location: "Los Angeles, USA",
        graduationDate: "Jun 2015",
      },
      // Add more education data
    ]);
    setWorkExperience([
      {
        id: "1",
        position: "Intern",
        company: "XYZ Corporation",
        location: "San Francisco, USA",
        startDate: "May 2019",
        endDate: "Aug 2019",
        description: "Assisted with frontend development and bug fixing.",
      },
      {
        id: "2",
        position: "Software Developer",
        company: "ABC Tech",
        location: "New York, USA",
        startDate: "Jan 2020",
        endDate: "Present",
        description: "Developed web applications using React and Node.js.",
      },
    ]);
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.source.droppableId === "education") {
      // Reorder education sections
      // Logic to update the education state
    } else if (result.source.droppableId === "workExperience") {
      // Reorder work experience sections
    }
  };

  const handleColorChange = (e) => {
    setWorkExperienceColor(e.target.value);
  };

  return (
    <div className="resume">
      <div className="experience-color">
        <h4>Select Work Experience Color:</h4>
        <span className="color-select">
          <FormControl>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={workExperienceColor}
              label="color"
              onChange={handleColorChange}
            >
              <MenuItem value="lightgrey">Light Grey</MenuItem>
              <MenuItem value="lightblue">Light Blue</MenuItem>
              <MenuItem value="white">White</MenuItem>
            </Select>
          </FormControl>
        </span>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="education">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h2>Education</h2>

              {education.map((edu, index) => (
                <Draggable key={edu.id} draggableId={edu.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="education">
                        <h4>
                          <p>{edu.degree}</p>
                        </h4>
                        <p>{edu.college}</p>
                        <p>{edu.location}</p>
                        <p>{edu.graduationDate}</p>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="work-experience">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="workExperience">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ backgroundColor: workExperienceColor }}
              >
                <h2>Work Experience</h2>

                {workExperience.map((exp, index) => (
                  <Draggable key={exp.id} draggableId={exp.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="education">
                          <h4>
                            <p>{exp.position}</p>
                          </h4>
                          <p>{exp.company}</p>
                          <p>{exp.location}</p>
                          <p>{exp.startDate}</p>
                          <p>{exp.endDate}</p>
                          <p>{exp.description}</p>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

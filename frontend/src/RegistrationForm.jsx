import React, { useState } from 'react';
import './App.css';

const departmentOptions = ['CSE','IT', 'ECE', 'EEE', 'MECH', 'CIVIL'];
const sectionOptions = ['1', '2', '3'];
const skillsOptions = ['C++', 'Java', 'Python', 'Ruby'];

function RegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    rollno: '',
    gender: '',
    department: '',
    section: '',
    skills: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSkillsChange = (e) => {
    const { value, checked } = e.target;
    setForm((prevForm) => {
      if (checked) {
        return { ...prevForm, skills: [...prevForm.skills, value] };
      } else {
        return { ...prevForm, skills: prevForm.skills.filter((skill) => skill !== value) };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
      <label>
        Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} required />
      </label>
      <label>
        Roll No:
        <input type="text" name="rollno" value={form.rollno} onChange={handleChange} required />
      </label>
      <label>
        Gender:
        <div className="radio-group">
            <label><input type='radio' name='gender' value='Male' checked={form.gender==='Male'} onChange={handleChange} />Male</label>
            <label><input type='radio' name='gender' value='Female' checked={form.gender==='Female'} onChange={handleChange} />Female</label>
        </div> 
      </label>
      <label>
        Department:
        <select name="department" value={form.department} onChange={handleChange} required>
          <option value="">Select Department</option>
          {departmentOptions.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </label>
      <label>
        Section:
        <select name="section" value={form.section} onChange={handleChange} required>
          <option value="">Select Section</option>
          {sectionOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>
      <label>
        Skills:
        <div className="checkbox-group">
          {skillsOptions.map((skill) => (
            <label key={skill}>
              <input
                type="checkbox"
                name="skills"
                value={skill}
                checked={form.skills.includes(skill)}
                onChange={handleSkillsChange}
              />
              {skill}
            </label>
          ))}
        </div>
      </label>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;

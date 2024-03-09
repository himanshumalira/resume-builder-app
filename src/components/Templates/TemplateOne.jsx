import React,{useEffect, useState} from 'react'

function TemplateOne() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        education: '',
        experience: '',
        skills: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, for example, send data to backend
        console.log(formData);
        localStorage.setItem('formData',JSON.stringify(formData));
      };
    //  useEffect(()=> {
    //   localStorage.setItem('formData', JSON.stringify(formData));
    //  }, [formData]);
      return (
        <div className="resume-form font-bold  text-lg box-border h-200 w-200 p-4 border-4 m-4 ">
          <h2>Resume Form</h2>
          <form onSubmit={handleSubmit} >
            <div classname =  'w-full h-4 text-red-500'>
    
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
    
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div classname = 'mb-4 w-full h-4'>
    
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
    
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className='mb-4' >
    
            <label htmlFor="education">Education:</label>
            <textarea id="education" name="education" value={formData.education} onChange={handleChange} required />
            </div>
    <div>
    
            <label htmlFor="experience">Experience:</label>
            <textarea id="experience" name="experience" value={formData.experience} onChange={handleChange} required />
    
            <label htmlFor="skills">Skills:</label>
            <textarea id="skills" name="skills" value={formData.skills} onChange={handleChange} required />
    </div>
    
            <button type="submit">Save</button>
          </form>
        </div>
      );
}

export default TemplateOne

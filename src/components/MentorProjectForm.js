import React, { useState } from 'react';
import './MentorProjectForm.css';

function ProjectSubmissionForm() {
  const [formData, setFormData] = useState({
    title: '',
    club: '',
    description: '',
    duration: '',
    difficulty: '',
    tags: [],
    mentor1: '',
    contact1: '',
    mentor2: '',
    contact2: '',
    mentor3: '',
    contact3: '',
    objectives: [''],
    weekwiseExecution: [
      { week: 'Week 1', plan: '', resources: [''] }
    ],
    methodology: '',
    result: {
      summary: '',
      githubRepo: '',
      demoLink: '',
      images: ['']
    },
    coverImage: '',
    futureProspects: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleObjectiveChange = (index, value) => {
    const newObjectives = [...formData.objectives];
    newObjectives[index] = value;
    setFormData(prev => ({
      ...prev,
      objectives: newObjectives
    }));
  };

  const addObjective = () => {
    setFormData(prev => ({
      ...prev,
      objectives: [...prev.objectives, '']
    }));
  };

  const removeObjective = (index) => {
    const newObjectives = formData.objectives.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      objectives: newObjectives
    }));
  };

  const handleTagChange = (index, value) => {
    const newTags = [...formData.tags];
    newTags[index] = value;
    setFormData(prev => ({
      ...prev,
      tags: newTags
    }));
  };

  const addTag = () => {
    setFormData(prev => ({
      ...prev,
      tags: [...prev.tags, '']
    }));
  };

  const removeTag = (index) => {
    const newTags = formData.tags.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      tags: newTags
    }));
  };

  const handleWeekChange = (weekIndex, field, value) => {
    const newWeeks = [...formData.weekwiseExecution];
    newWeeks[weekIndex][field] = value;
    setFormData(prev => ({
      ...prev,
      weekwiseExecution: newWeeks
    }));
  };

  const handleResourceChange = (weekIndex, resourceIndex, value) => {
    const newWeeks = [...formData.weekwiseExecution];
    newWeeks[weekIndex].resources[resourceIndex] = value;
    setFormData(prev => ({
      ...prev,
      weekwiseExecution: newWeeks
    }));
  };

  const addWeek = () => {
    const weekNumber = formData.weekwiseExecution.length + 1;
    setFormData(prev => ({
      ...prev,
      weekwiseExecution: [
        ...prev.weekwiseExecution,
        { week: `Week ${weekNumber}`, plan: '', resources: [''] }
      ]
    }));
  };

  const removeWeek = (index) => {
    const newWeeks = formData.weekwiseExecution.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      weekwiseExecution: newWeeks
    }));
  };

  const addResource = (weekIndex) => {
    const newWeeks = [...formData.weekwiseExecution];
    newWeeks[weekIndex].resources.push('');
    setFormData(prev => ({
      ...prev,
      weekwiseExecution: newWeeks
    }));
  };

  const removeResource = (weekIndex, resourceIndex) => {
    const newWeeks = [...formData.weekwiseExecution];
    newWeeks[weekIndex].resources = newWeeks[weekIndex].resources.filter(
      (_, i) => i !== resourceIndex
    );
    setFormData(prev => ({
      ...prev,
      weekwiseExecution: newWeeks
    }));
  };

  const handleResultChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      result: {
        ...prev.result,
        [field]: value
      }
    }));
  };

  const handleResultImageChange = (index, value) => {
    const newImages = [...formData.result.images];
    newImages[index] = value;
    setFormData(prev => ({
      ...prev,
      result: {
        ...prev.result,
        images: newImages
      }
    }));
  };

  const addResultImage = () => {
    setFormData(prev => ({
      ...prev,
      result: {
        ...prev.result,
        images: [...prev.result.images, '']
      }
    }));
  };

  const removeResultImage = (index) => {
    const newImages = formData.result.images.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      result: {
        ...prev.result,
        images: newImages
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Process the data to match the JSON structure
    const processedData = {
      title: formData.title,
      club: formData.club,
      description: formData.description,
      duration: formData.duration,
      difficulty: formData.difficulty,
      tags: formData.tags.filter(tag => tag.trim()),
      mentor1: formData.mentor1,
      contact1: formData.contact1,
      mentor2: formData.mentor2,
      contact2: formData.contact2,
      mentor3: formData.mentor3,
      contact3: formData.contact3,
      objectives: formData.objectives.filter(obj => obj.trim()),
      weekwiseExecution: formData.weekwiseExecution.map(week => ({
        week: week.week,
        plan: week.plan,
        resources: week.resources.filter(res => res.trim())
      })),
      methodology: formData.methodology,
      result: {
        summary: formData.result.summary,
        githubRepo: formData.result.githubRepo,
        demoLink: formData.result.demoLink,
        images: formData.result.images.filter(img => img.trim())
      },
      coverImage: formData.coverImage,
      futureProspects: formData.futureProspects
    };

    console.log('Form submitted:', processedData);
    // Here you would typically send the data to your backend
    alert('Project submitted successfully!');
  };

  return (
    <div className="form-container1" style={{backgroundColor:'#0242b7'}}>
      <div className="form-wrapper">
        <h1 className="form-main-title">Project Submission Form</h1>
        <p className="form-subtitle">Fill in all the details about your project</p>
        
        <form onSubmit={handleSubmit} className="project-form">
          
          {/* Basic Information Section */}
          <section className="form-section">
            <h2 className="section-title">Basic Information</h2>
            
            <div className="form-group">
              <label htmlFor="title">Project Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                placeholder="Enter project title"
                style={{color: 'black'}}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="club">Club *</label>
                <input
                  type="text"
                  id="club"
                  name="club"
                  value={formData.club}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Robotics Club"
                  style={{color: 'black'}}
                />
              </div>

              <div className="form-group">
                <label htmlFor="duration">Duration *</label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 8 weeks"
                  style={{color: 'black'}}
                />
              </div>

              <div className="form-group">
                <label htmlFor="difficulty">Difficulty *</label>
                <select
                  id="difficulty"
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleInputChange}
                  required
                  style={{color: 'black'}}
                >
                  <option value="">Select difficulty</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Project Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows="5"
                placeholder="Describe your project in detail..."
                style={{color: 'black'}}
              />
            </div>

            <div className="form-group">
              <h4 style={{color: 'black'}}>Tags</h4>
              {formData.tags.map((tag, index) => (
                <div key={index} className="dynamic-field-group">
                  <div className="form-group flex-grow">
                    <label htmlFor={`tag-${index}`}>Tag {index + 1}</label>
                    <input
                      type="text"
                      id={`tag-${index}`}
                      value={tag}
                      onChange={(e) => handleTagChange(index, e.target.value)}
                      placeholder="e.g., Python, Machine Learning"
                      style={{color: 'black'}}
                    />
                  </div>
                  {formData.tags.length > 0 && (
                    <button
                      type="button"
                      onClick={() => removeTag(index)}
                      className="btn-remove"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              
              <button type="button" onClick={addTag} className="btn-add">
                + Add Tag
              </button>
            </div>

            <div className="form-group">
              <label htmlFor="coverImage">Cover Image URL *</label>
              <input
                type="url"
                id="coverImage"
                name="coverImage"
                value={formData.coverImage}
                onChange={handleInputChange}
                required
                placeholder="https://example.com/image.jpg"
                style={{color: 'black'}}
              />
            </div>
          </section>

          {/* Mentor Information Section */}
          <section className="form-section">
            <h2 className="section-title">Mentor Information</h2>
            
            <div className="mentor-group">
              <h4>Mentor 1 *</h4>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="mentor1">Name</label>
                  <input
                    type="text"
                    id="mentor1"
                    name="mentor1"
                    value={formData.mentor1}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter mentor name"
                    style={{color: 'black'}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact1">Contact</label>
                  <input
                    type="text"
                    id="contact1"
                    name="contact1"
                    value={formData.contact1}
                    onChange={handleInputChange}
                    required
                    placeholder="Email or phone"
                    style={{color: 'black'}}
                  />
                </div>
              </div>
            </div>

            <div className="mentor-group">
              <h4>Mentor 2 (Optional)</h4>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="mentor2">Name</label>
                  <input
                    type="text"
                    id="mentor2"
                    name="mentor2"
                    value={formData.mentor2}
                    onChange={handleInputChange}
                    placeholder="Enter mentor name"
                    style={{color: 'black'}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact2">Contact</label>
                  <input
                    type="text"
                    id="contact2"
                    name="contact2"
                    value={formData.contact2}
                    onChange={handleInputChange}
                    placeholder="Email or phone"
                    style={{color: 'black'}}
                  />
                </div>
              </div>
            </div>

            <div className="mentor-group">
              <h4>Mentor 3 (Optional)</h4>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="mentor3">Name</label>
                  <input
                    type="text"
                    id="mentor3"
                    name="mentor3"
                    value={formData.mentor3}
                    onChange={handleInputChange}
                    placeholder="Enter mentor name"
                    style={{color: 'black'}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact3">Contact</label>
                  <input
                    type="text"
                    id="contact3"
                    name="contact3"
                    value={formData.contact3}
                    onChange={handleInputChange}
                    placeholder="Email or phone"
                    style={{color: 'black'}}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Objectives Section */}
          <section className="form-section">
            <h2 className="section-title">Objectives</h2>
            
            {formData.objectives.map((objective, index) => (
              <div key={index} className="dynamic-field-group">
                <div className="form-group flex-grow">
                  <label htmlFor={`objective-${index}`}>Objective {index + 1}</label>
                  <input
                    type="text"
                    id={`objective-${index}`}
                    value={objective}
                    onChange={(e) => handleObjectiveChange(index, e.target.value)}
                    placeholder="Enter objective"
                    style={{color: 'black'}}
                  />
                </div>
                {formData.objectives.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeObjective(index)}
                    className="btn-remove"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            
            <button type="button" onClick={addObjective} className="btn-add">
              + Add Objective
            </button>
          </section>

          {/* Methodology Section */}
          <section className="form-section">
            <h2 className="section-title">Methodology</h2>
            
            <div className="form-group">
              <label htmlFor="methodology">Methodology</label>
              <textarea
                id="methodology"
                name="methodology"
                value={formData.methodology}
                onChange={handleInputChange}
                rows="4"
                placeholder="Describe the methodology or approach..."
                style={{color: 'black'}}
              />
            </div>
          </section>

          {/* Week-wise Execution Section */}
          <section className="form-section">
            <h2 className="section-title">Week-wise Execution</h2>
            
            {formData.weekwiseExecution.map((week, weekIndex) => (
              <div key={weekIndex} className="week-container">
                <div className="week-header">
                  <h3>{week.week}</h3>
                  {formData.weekwiseExecution.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeWeek(weekIndex)}
                      className="btn-remove-week"
                    >
                      Remove Week
                    </button>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor={`week-plan-${weekIndex}`}>Week Plan *</label>
                  <textarea
                    id={`week-plan-${weekIndex}`}
                    value={week.plan}
                    onChange={(e) => handleWeekChange(weekIndex, 'plan', e.target.value)}
                    rows="3"
                    placeholder="What will be covered this week?"
                    required
                    style={{color: 'black'}}
                  />
                </div>

                <div className="resources-section">
                  <h4>Resources</h4>
                  {week.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="dynamic-field-group">
                      <div className="form-group flex-grow">
                        <label htmlFor={`resource-${weekIndex}-${resourceIndex}`}>
                          Resource {resourceIndex + 1}
                        </label>
                        <input
                          type="url"
                          id={`resource-${weekIndex}-${resourceIndex}`}
                          value={resource}
                          onChange={(e) => handleResourceChange(weekIndex, resourceIndex, e.target.value)}
                          placeholder="https://example.com/resource"
                          style={{color: 'black'}}
                        />
                      </div>
                      {week.resources.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeResource(weekIndex, resourceIndex)}
                          className="btn-remove"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  
                  <button
                    type="button"
                    onClick={() => addResource(weekIndex)}
                    className="btn-add-small"
                  >
                    + Add Resource
                  </button>
                </div>
              </div>
            ))}
            
            <button type="button" onClick={addWeek} className="btn-add">
              + Add Week
            </button>
          </section>

          {/* Result Section */}
          <section className="form-section">
            <h2 className="section-title">Result</h2>
            
            <div className="form-group">
              <label htmlFor="result-summary">Result Summary</label>
              <textarea
                id="result-summary"
                value={formData.result.summary}
                onChange={(e) => handleResultChange('summary', e.target.value)}
                rows="4"
                placeholder="Summarize the project outcomes..."
                style={{color: 'black'}}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="github-repo">GitHub Repository URL</label>
                <input
                  type="url"
                  id="github-repo"
                  value={formData.result.githubRepo}
                  onChange={(e) => handleResultChange('githubRepo', e.target.value)}
                  placeholder="https://github.com/username/repo"
                  style={{color: 'black'}}
                />
              </div>

              <div className="form-group">
                <label htmlFor="demo-link">Demo Video URL</label>
                <input
                  type="url"
                  id="demo-link"
                  value={formData.result.demoLink}
                  onChange={(e) => handleResultChange('demoLink', e.target.value)}
                  placeholder="https://youtube.com/watch?v=..."
                  style={{color: 'black'}}
                />
              </div>
            </div>

            <div className="images-section">
              <h4>Result Images</h4>
              {formData.result.images.map((image, index) => (
                <div key={index} className="dynamic-field-group">
                  <div className="form-group flex-grow">
                    <label htmlFor={`result-image-${index}`}>Image {index + 1} URL</label>
                    <input
                      type="url"
                      id={`result-image-${index}`}
                      value={image}
                      onChange={(e) => handleResultImageChange(index, e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      style={{color: 'black'}}
                    />
                  </div>
                  {formData.result.images.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeResultImage(index)}
                      className="btn-remove"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              
              <button type="button" onClick={addResultImage} className="btn-add-small">
                + Add Image
              </button>
            </div>
          </section>

          {/* Future Prospects Section */}
          <section className="form-section">
            <h2 className="section-title">Future Prospects</h2>
            
            <div className="form-group">
              <label htmlFor="futureProspects">Future Prospects</label>
              <textarea
                id="futureProspects"
                name="futureProspects"
                value={formData.futureProspects}
                onChange={handleInputChange}
                rows="4"
                placeholder="What are the future possibilities for this project?"
                style={{color: 'black'}}
              />
            </div>
          </section>

          {/* Submit Button */}
          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Submit Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectSubmissionForm;
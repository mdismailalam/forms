import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './AdmitCard.css'; // Import the custom CSS for the component
import cocare from "../../src/Assets/cocare.jpg"

const AdmitCard = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        motherName: '',
        fatherName: '',
        address: '',
        mobileNo: '',
        regNumber: '',
        dob: '',
        classGroup: '',
        attachment: null,
        date: '',
    });
    const [photoPreview, setPhotoPreview] = useState(null);
    const [isShow, setIsShow] = useState(true)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const requiredFields = ["studentName", "motherName", "fatherName", "address", "mobileNo", "regNumber", "dob", "classGroup"];
        let valid = true;
        let missingFields = [];
        requiredFields.forEach(field => {
            if (!formData[field]) {
                const fieldName = field.replace(/([A-Z])/g, ' $1').toLowerCase(); // format the field name
                missingFields.push(fieldName);
            }
        });
        if (missingFields.length > 0) {
            alert(`Please fill out the following fields: ${missingFields.join(', ')}.`);
            valid = false
        }

        return valid;
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                photo: file
            }));

            // Create preview URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const downloadPDF = () => {

        if (!validateForm()) return;
        const formSubheading = document.querySelector('.form-subheading');
        const originalSubheadingText = formSubheading.innerText; // Store the original text
        formSubheading.innerText = 'Admit Card'; // Change the text to "Admit Card"
        html2canvas(document.querySelector("#formContainer"), {
            ignoreElements: (element) => {
                // Ignore the element with the class `no-download-btn`
                return element.classList.contains('no-download-btn');
            }
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 295; // A4 height in mm
            const imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save("registration_form.pdf");

        });
        setIsShow(false)
    };

    return (
        <div className="form-container">
            <div id="formContainer" className="form-box">
                <form>
                    <div className="form-header">

                       
                       
                        <div className="form-title">
                            <h1 className="form-heading">Ko-Care Foundation Koriyana</h1>
                            <p className="form-subheading">Exam Registration form</p>
                        </div>
                        <img alt="Logo" className="form-logo" src={cocare} />
                    </div>

                    <div className="form-body">
                        <div className="form-column-left">
                            <div className="form-field">
                                <label className="form-label">Student’s Name:</label>
                                <input className="form-input" name="studentName" type="text" value={formData.studentName} onChange={handleChange} />
                            </div>
                            <div className="form-field">
                                <label className="form-label">Mother’s Name:</label>
                                <input className="form-input" name="motherName" type="text" value={formData.motherName} onChange={handleChange} />
                            </div>
                            <div className="form-field">
                                <label className="form-label">Father’s Name:</label>
                                <input className="form-input" name="fatherName" type="text" value={formData.fatherName} onChange={handleChange} />
                            </div>
                            <div className="form-field">
                                <label className="form-label">Address:</label>
                                <input className="form-input" name="address" type="text" value={formData.address} onChange={handleChange} />
                            </div>
                            <div className="form-field">
                                <label className="form-label">Mobile no.:</label>
                                <input className="form-input" name="mobileNo" type="text" value={formData.mobileNo} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-column-right">
                            <div className="form-field">
                                <label className="form-label">Reg.number:</label>
                                <input className="form-input" name="regNumber" type="text" value={formData.regNumber} onChange={handleChange} />
                            </div>
                            <div className="form-field">
                                <label className="form-label">DOB:</label>
                                <input className="form-input" name="dob" type="date" value={formData.dob} onChange={handleChange} />
                            </div>
                            <div className="form-field">
                                <label className="form-label">CLASS GROUP:</label>
                                <select className="form-input" name="classGroup" value={formData.classGroup} onChange={handleChange}>
                                    <option value="">Select a class</option>
                                    <option value="Class 1">1 - 5</option>
                                    <option value="Class 2">6 - 8</option>
                                    <option value="Class 3">9 - 10</option>
                                </select>
                            </div>
                            <div className="photo-upload-container">
                                <div className="photo-upload-box">
                                    {photoPreview ? (
                                        <img src={photoPreview} alt="Preview" className="photo-preview" />
                                    ) : (
                                        <div className="camera-icon">📷</div>
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handlePhotoChange}
                                        className="file-input" name="attachment"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-footer">
                        <div className="form-footer-left">
                            <label className="form-label">Date:</label>
                            <input className="form-input" name="date" type="date" value={formData.date} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-signatures">
                        <div className="form-signature-left">Exam controller signature</div>
                        <div className="form-signature-right">Registar's signature</div>
                    </div>
                    <div className="form-download">
                        {isShow ? (
                            <button type="button" className="form-download-btn no-download-btn" onClick={downloadPDF}>
                                Download Admit Card
                            </button>
                        ) : (
                            <div style={{ color: 'green', fontWeight: 'bold', fontSize: '24px' }}>
                                Thank You! Admit Card Successfully Downloaded
                            </div>
                        )}
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AdmitCard;

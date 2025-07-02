import React from 'react';
import './participant.css';
import { FaTrash, FaPlus } from 'react-icons/fa';

export default function ParticipantPage() {
  return (
    <main className="participant-container">
      <h1 className="participant-title">Certification Intensive</h1>

      <section>
        <h2 className="participant-subtitle">Personal Information</h2>
        <label htmlFor="">Name:</label><div className="form-field">Luboš Kříž</div>
        <label htmlFor="">Email:</label><div className="form-field">ukrizu@gmail.com</div>
        <label htmlFor="">Phone:</label><div className="form-field">+420739656314</div>
        <label htmlFor="">Address:</label><div className="form-field">Lesní 729</div>
        <label htmlFor="">Date of birth:</label><div className="form-field">17/10/1976</div>
        <label htmlFor="">Gender:</label><div className="form-field">M</div>
      </section>

      <section>
        <h2 className="participant-subtitle">Certification Modules</h2>
        <div className="form-field row"><span>Spiritual Emergency - Tav Sparks - 4/2018 - Czech Republic</span> <FaTrash className="icon" /></div>
        <div className="form-field row"><span>Nature of Reality - Peter Köllerer - 10/2023 - Austria</span> <FaTrash className="icon" /></div>
        <div className="form-field row"><span>Psychedelics - Marc Aixala - 2/2024 - Austria</span> <FaTrash className="icon" /></div>
        <div className="form-field row"><span>Music and Transcendence - Peter Köllerer - 2/2024 - Austria</span> <FaTrash className="icon" /></div>
        <div className="form-field row"><span>Holotropic Paradigm - Sitara Blasco - 4/2024 - Italy</span> <FaTrash className="icon" /></div>
        <div className="form-field row"><span>Addiction and Attachment - Paul McCormack - 7/2024 - Austria</span> <FaTrash className="icon" /></div>
        <div className="form-field row"><span>The Power Within - Sitara Blasco - 10/2024 - Austria</span> <FaTrash className="icon" /></div>
        <div className="form-field row"><span>Future: Trauma and Transformation - Sonja Busch - 5/2025 - Italy</span> <FaTrash className="icon" /></div>
        <button className="add-button"><span className="add-icon"><FaPlus /></span><span className="add-text">Add Module</span></button>
      </section>

      <section>
        <h2 className="participant-subtitle">Holotropic Breathwork Sessions</h2>
        <div className="form-field row">Single - 1/2017 - Nesmen, Czech Republic - Ludmila Chrášťanská, Jaroslav Kursa, Jan Šilar <FaTrash className="icon" /></div>
        <div className="form-field row">Double - 4/2017 - Nesmen, Czech Republic - Ludmila Chrášťanská, Jaroslav Kursa, Jan Šilar <FaTrash className="icon" /></div>
        <div className="form-field row">Single - 10/2017 - Prague, Czech Republic - Jan Šilar <FaTrash className="icon" /></div>
        <div className="form-field row">Single - 1/2018 - Nesmen, Czech Republic - Ludmila Chrášťanská, Jaroslav Kursa, Petr Pacovsky <FaTrash className="icon" /></div>
        <div className="form-field row">Double - 5/2018 - Nesmen, Czech Republic - Ludmila Chrášťanská, Jaroslav Kursa, Jan Šilar <FaTrash className="icon" /></div>
        <div className="form-field row">Double - 9/2018 - Holos Vlaštovičky, Czech Republic - Milan Hrabánek, Svatava Bardynová <FaTrash className="icon" /></div>
        <div className="form-field row">Single - 12/2018 - Nesmen, Czech Republic - Ludmila Chrášťanská, Jaroslav Kursa, Karel Fuller <FaTrash className="icon" /></div>
        <div className="form-field row">Single - 3/2019 - Prague, Czech Republic - Jan Šilar <FaTrash className="icon" /></div>
        <div className="form-field row">Single - 1/2020 - Nesmen, Czech Republic - Ludmila Chrášťanská, Jaroslav Kursa, Jan Šilar <FaTrash className="icon" /></div>
        <div className="form-field row">Single - 3/2024 - Prague, Czech Republic - Roman Petrov, Andrea Košiarová <FaTrash className="icon" /></div>
        <div className="form-field row">Double - 6/2024 - Nesmen, Czech Republic - Jaroslav Kursa, Jan Šilar <FaTrash className="icon" /></div>
        <button className="add-button"><span className="add-icon"><FaPlus /></span><span className="add-text">Add Session</span></button>
      </section>

      <section>
        <h2 className="participant-subtitle">Apprenticing Experience</h2>
        <div className="form-field row">Single - 1/2025 - Prague, Czech Republic - Pavel Ševčík, Lucie Heralová <FaTrash className="icon" /></div>
        <div className="form-field row">Single - 2/2025 - Brno, Czech Republic - Magda Šimečková, Lukáš Srbecký <FaTrash className="icon" /></div>
        <div className="form-field row">Double - 3/2025 - Brno, Czech Republic - Magda Šimečková, Lukáš Srbecký <FaTrash className="icon" /></div>
        <div className="form-field row">Double - 3/2025 - GTT Module: Holotropic Paradigm, Austria (Sitara, Peter, Thomas) <FaTrash className="icon" /></div>
        <button className="add-button"><span className="add-icon"><FaPlus /></span><span className="add-text">Add Experience</span></button>
      </section>

      <section>
        <h2 className="participant-subtitle">Individual Consultations</h2>
        <div className="form-field row">26/2/2024 Peter Köllerer <FaTrash className="icon" /></div>
        <div className="form-field row">11/3/2024 Roman Petrov <FaTrash className="icon" /></div>
        <div className="form-field row">16/5/2024 Sonja Busch <FaTrash className="icon" /></div>
        <div className="form-field row">13/6/2024 Sitara Blasco <FaTrash className="icon" /></div>
        <div className="form-field row">24/6/2024 Sitara Blasco <FaTrash className="icon" /></div>
        <div className="form-field row">29/7/2024 Thomas Liska <FaTrash className="icon" /></div>
        <div className="form-field row">17/12/2024 Sonja Busch <FaTrash className="icon" /></div>
        <div className="form-field row">1/2/2025 Lukas Srbecky <FaTrash className="icon" /></div>
        <div className="form-field row">2/2/2025 Magdalena Simeckova <FaTrash className="icon" /></div>
        <button className="add-button"><span className="add-icon"><FaPlus /></span><span className="add-text">Add Consultation</span></button>
      </section>

      <section>
        <h2 className="participant-subtitle">Recommendation</h2>
        <div className="form-field row">Sonja Busch <FaTrash className="icon" /></div>
        <button className="add-button"><span className="add-icon"><FaPlus /></span><span className="add-text">Add Recommendation</span></button>
      </section>
    </main>
  );
}

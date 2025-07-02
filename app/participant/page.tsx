import React from 'react';
import './participant.css';
import { FaTrash, FaPlus } from 'react-icons/fa';

export default function ParticipantPage() {
  return (
    <main className="participant-container">
      <h1 className="participant-title">Certification Intensive</h1>

      <section>
        <h2 className="participant-subtitle">Personal Information</h2>
        <div className="form-field">Luboš Kříž</div>
        <div className="form-field">ukrizu@gmail.com</div>
        <div className="form-field">+420739656314</div>
        <div className="form-field">Lesní 729</div>
        <div className="form-field">17/10/1976</div>
        <div className="form-field">M</div>
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
        <div className="form-field">Single - 1/2017 - Nesmen, Czech Republic - Ludmila Chrášťanská, Jaroslav Kursa, Jan Šilar</div>
        <div className="form-field">Double - 4/2017 - Nesmen, Czech Republic - Ludmila Chrášťanská, Jaroslav Kursa, Jan Šilar</div>
        <div className="form-field">Single - 10/2017 - Prague, Czech Republic - Jan Šilar</div>
        <div className="form-field">Single - 1/2018 - Nesmen, Czech Republic - Ludmila Chrášťanská, Jaroslav Kursa, Petr Pacovsky</div>
        <div className="form-field">Double - 5/2018 - Nesmen, Czech Republic - Ludmila Chrášťanská, Jaroslav Kursa, Jan Šilar</div>
        <div className="form-field">Double - 9/2018 - Holos Vlaštovičky, Czech Republic - Milan Hrabánek, Svatava Bardynová</div>
        <div className="form-field">Single - 12/2018 - Nesmen, Czech Republic - Ludmila Chrášťanská, Jaroslav Kursa, Karel Fuller</div>
        <div className="form-field">Single - 3/2019 - Prague, Czech Republic - Jan Šilar</div>
        <div className="form-field">Single - 1/2020 - Nesmen, Czech Republic - Ludmila Chrášťanská, Jaroslav Kursa, Jan Šilar</div>
        <div className="form-field">Single - 3/2024 - Prague, Czech Republic - Roman Petrov, Andrea Košiarová</div>
        <div className="form-field">Double - 6/2024 - Nesmen, Czech Republic - Jaroslav Kursa, Jan Šilar</div>
      </section>

      <section>
        <h2 className="participant-subtitle">Apprenticing Experience</h2>
        <div className="form-field">Single - 1/2025 - Prague, Czech Republic - Pavel Ševčík, Lucie Heralová</div>
        <div className="form-field">Single - 2/2025 - Brno, Czech Republic - Magda Šimečková, Lukáš Srbecký</div>
        <div className="form-field">Double - 3/2025 - Brno, Czech Republic - Magda Šimečková, Lukáš Srbecký</div>
        <div className="form-field">Double - 3/2025 - GTT Module: Holotropic Paradigm, Austria (Sitara, Peter, Thomas)</div>
      </section>

      <section>
        <h2 className="participant-subtitle">Individual Consultations</h2>
        <div className="form-field">26/2/2024 Peter Köllerer</div>
        <div className="form-field">11/3/2024 Roman Petrov</div>
        <div className="form-field">16/5/2024 Sonja Busch</div>
        <div className="form-field">13/6/2024 Sitara Blasco</div>
        <div className="form-field">24/6/2024 Sitara Blasco</div>
        <div className="form-field">29/7/2024 Thomas Liska</div>
        <div className="form-field">17/12/2024 Sonja Busch</div>
        <div className="form-field">1/2/2025 Lukas Srbecky</div>
        <div className="form-field">2/2/2025 Magdalena Simeckova</div>
      </section>

      <section>
        <h2 className="participant-subtitle">Recommendation</h2>
        <div className="form-field">Sonja Busch</div>
      </section>
    </main>
  );
}

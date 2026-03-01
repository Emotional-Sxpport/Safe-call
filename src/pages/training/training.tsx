import React from 'react';
import { useNavigate } from 'react-router-dom';
import './training.css';

export default function TrainingPage() {
  const navigate = useNavigate();

  const dispatcherTranscript = `Dispatcher: 911, what's your emergency?
Caller: My house is on fire! Please send help!
Dispatcher: What's the address?
Caller: 742 Maplewood Drive, Brookside.
Dispatcher: Are you inside?
Caller: No, I'm outside with my daughter.
Dispatcher: Good. Stay outside. Is anyone still inside?
Caller: No, just our dog.
Dispatcher: Do not go back in. Fire crews are on the way. Are either of you injured?
Caller: No.a
Dispatcher: Move across the street and stay clear of smoke.
Caller: Okay… I hear sirens.
Dispatcher: That's them. Wave them down. Stay safe.`;

  const feedback = `The dispatcher was calm and collected throughout the interaction, ensuring that the caller would not panic. Asking, "What's the address?" early on ensured help could be sent even if the call disconnected. By asking, "Is anyone still inside?" and "Are either of you injured?", the dispatcher gathered essential information for responding crews and assessed medical risk. Overall, the dispatcher remained concise, safety-focused, and methodical while ensuring emergency services were en route.`;

  return (
    <div className="training-page">
      <div className="training-content">
        <div className="training-panel left-panel">
          <h2>Call Transcript</h2>
          <div>
            {dispatcherTranscript}
          </div>
        </div>
        <div className="training-panel right-panel">
          <h2>Feedback</h2>
          <div>
            {feedback}
          </div>
        </div>
      </div>

      <div className="training-button-container">
        <button
          onClick={() => navigate('/testing')}
          className="training-button"
        >
          To Testing
        </button>
      </div>
    </div>
  );
}
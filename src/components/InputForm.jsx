import React, { useState } from 'react';
import { parseDate } from 'chrono-node';
import './InputForm.css';

const InputForm = ({ onAddTask }) => {
  const [input, setInput] = useState('');

  const parseTask = (input) => {
    // 1️⃣ Extract priority
    const priorityRegex = /(P[1-4])/i;
    const priorityMatch = input.match(priorityRegex);
    const priority = priorityMatch ? priorityMatch[1].toUpperCase() : 'P3';

    // 2️⃣ Extract date & time
    const date = parseDate(input);

    // 3️⃣ Remove date-related parts
    let inputWithoutDate = input;
    if (date) {
      inputWithoutDate = input.replace(/(\d{1,2}(am|pm)|tomorrow|today|\d{1,2}(th|st|nd|rd)?\s+\w+|\d{1,2}\/\d{1,2}\/\d{2,4})/gi, '');
    }

    // 4️⃣ Remove priority
    inputWithoutDate = inputWithoutDate.replace(priorityRegex, '').trim();

    // 5️⃣ Find the first proper noun (capitalized word) that isn’t at the start
    const words = inputWithoutDate.split(/\s+/);
    let assignee = 'Unassigned';
    for (let i = 1; i < words.length; i++) {
      if (words[i][0] && words[i][0] === words[i][0].toUpperCase()) {
        assignee = words[i];
        break;
      }
    }

    // 6️⃣ Remove the assignee from the task name
    let name = inputWithoutDate.replace(assignee, '').trim();

    // 7️⃣ Remove trailing "by", "to", "for", "at" if it’s at the end
    name = name.replace(/\b(by|to|for|at)$/i, '').trim();

    return {
      name: name || 'Untitled Task',
      assignee,
      dueDateTime: date ? date.toLocaleString() : 'Not specified',
      priority,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = parseTask(input);
    onAddTask(task);
    setInput('');
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter natural language task..."
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default InputForm;

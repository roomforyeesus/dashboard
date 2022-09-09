import React, {useState} from "react";

import App from './App';
import './App.css';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

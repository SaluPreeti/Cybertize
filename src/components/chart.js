
import 'chart.js/auto';
import { LinearScale, CategoryScale } from 'chart.js';
LinearScale.id = 'linear';
CategoryScale.id = 'category';

// Register the scales
Chart.register(LinearScale, CategoryScale);

import  { useState } from 'react';
import './App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function App() {
  const [chartOptions, setChartOptions] = useState({
  
  });

  const [textAreaValue, setTextAreaValue] = useState('');

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  const handleButtonClick = () => {
    try {
      const parsedInput = JSON.parse(textAreaValue);

      if (parsedInput.series && Array.isArray(parsedInput.series)) {
        setChartOptions({
          ...parsedInput,
          title: {
            text: 'Updated Chart'
          }
        });
      } else {
        alert('Invalid ');
      }
    } catch (error) {
      alert('Invalid ');
    }
  };

  return (
    <div className='container'>
      <div className='inputBox'>
        <p>Input</p>
        <textarea
          className='inputArea'
          placeholder='Enter text'
          value={textAreaValue}
          onChange={handleTextAreaChange}
        />
        <button className='updateButton' onClick={handleButtonClick}>
          Update Chart
        </button>
      </div>
      <div className='outputBox'>
        <p>Output</p>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  );
}

export default App;

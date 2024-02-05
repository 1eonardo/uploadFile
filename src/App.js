import './App.css';

import DropFileInput from './components/drop-file-input/DropFileInput';
import Footer from './components/Footer/Footer';

function App() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div>
            <div className='box_section'>
                <div className='box'>
                    <DropFileInput
                        onFileChange={(files) => onFileChange(files)}
                    />
                </div>
            </div>
            <Footer/>
        </div>
        
    );
}

export default App;

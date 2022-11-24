import './styles.css'
import Records from './records.json'

function Display_Icons_Images_from_JSON_File_in_React_JS() {
    return (
        <div className='App'>
            <br />
            <div>
                <strong>Display Icons/ Images from JSON File in React JS</strong>
            </div>
            <br />

            <div className='inner'>
                {
                    Records && Records.map(record => {
                        return (
                            <div className='box' key={ record.id }>
                                {/*Ideally, use src={ record.icon }, and put images folder in public directory, 
                                in order to link to proper json key-value pair and eliminate need for require method; 
                                however, images kept in current directory for folder organization*/}
                                <img src={ require(`./images/logo-${record.id}.png`) } alt="" />
                                <br />
                                { record.caption }
                            </div>
                        )
                    })
                }
            </div>

            <br />
            <div> - WebStylePress -</div>
        </div>
    )
}

export default Display_Icons_Images_from_JSON_File_in_React_JS

// [REF] https://www.youtube.com/watch?v=NWG1Ygt1k1k&ab_channel=WebStylePress
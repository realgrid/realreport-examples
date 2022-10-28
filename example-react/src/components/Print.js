import { forwardRef } from "react";
import 'realreport/dist/realreport.css';

const Print = forwardRef(({}, ref) => {

    return (
        <div ref={ref} id='print'>Hi</div>
    )
})

export default Print;
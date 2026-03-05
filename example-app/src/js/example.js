import { AppleMaps } from '@managrsphere/capacitor-apple-maps';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    AppleMaps.echo({ value: inputValue })
}

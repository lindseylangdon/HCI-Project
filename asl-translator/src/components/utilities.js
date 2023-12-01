// Define our labelmap
const labelMap = {
    1:{name:'Hello', color:'red'},
    2:{name:'Thank You', color:'yellow'},
    3:{name:'I Love You', color:'lime'},
    4:{name:'Yes', color:'blue'},
    5:{name:'No', color:'purple'},
}

// Define a drawing function
// export const drawWords = (boxes, classes, scores, threshold, imgWidth, imgHeight, videoRef)=>{
//     const video = videoRef.current;
//     for(let i=0; i<=boxes.length; i++){
//         if(boxes[i] && classes[i] && scores[i]>threshold){
//             const [y,x,height,width] = boxes[i];
//             const text = classes[i];

//             const newText = `${labelMap[text]['name']} - ${Math.round(scores[i] * 100) / 100}`;
//             const textElement = document.createElement('div');
//             textElement.innerText = newText;
//             textElement.style.position = 'absolute';
//             textElement.style.left = `${x * imgWidth}px`;
//             textElement.style.top = `${y * imgHeight - 10}px`;

//             video.parentNode.appendChild(textElement);
//         }
//     }
// };

export const drawWords = (boxes, classes, scores, threshold, imgWidth, imgHeight) => {
    const words = [];
  
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i] && classes[i] && scores[i] > threshold) {
        const [y, x, height, width] = boxes[i];
        const text = classes[i];
  
        const newText = `${labelMap[text]['name']} - ${Math.round(scores[i] * 100) / 100}`;
        words.push({
          text: newText,
          position: { x: x * imgWidth, y: y * imgHeight - 10 },
        });
      }
    }
  
    return words;
  };
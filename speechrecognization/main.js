
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults= true;

  let p = document.createElement('p');
  const words = document.querySelector('.words');
  words.appendChild(p);



  recognition.addEventListener('result',e=>{
      const transcript = Array.from(e.results)
      .map(result=>result[0])
      .map(result=>result.transcript)
      .join('')

      p.textContent=transcript;
      if(e.results[0].isFinal){
          p=document.createElement('p');
          words.appendChild(p);
      }

    if(transcript.includes('song')){
        window.open('https://www.youtube.com/watch?v=lRVTVB94zTg&list=RDlRVTVB94zTg&start_radio=1')
    }else if (transcript.includes('email')){
        window.open("mailto:someone@example.com");
    }else if (transcript.includes('camera')){
        window.open("");
    }
      console.log(transcript);
  })

  recognition.addEventListener('end',recognition.start);
  recognition.start(); 



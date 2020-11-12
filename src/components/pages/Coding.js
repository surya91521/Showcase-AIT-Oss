import React from 'react'
import Fade from 'react-reveal/Fade'


function componentDidMount() 
{
  window.scrollTo(0, 0);
};

function Coding() {
  componentDidMount();
    return (
      
        <div className="background"  style={{
          '--color-1': '#243B55',
          '--color-2': '#141E30',
          background: `
            linear-gradient(
              170deg,
              var(--color-1),
              var(--color-2) 80%
            )
          `,
          paddingBottom: 30}}>
         <Fade Top>
        <div className="container" >
        
            <h1 style={{marginBottom:"50px",fontFamily:"serif",color:"#fff"}}>Article And Blogs</h1>
   
          <div class="media" style={{marginBottom:"65px",boxShadow:"0 4px 8px 0 #26408B, 0 6px 20px 0 #59656F",border:"3px solid #9984D4" ,paddingRight:"5px",borderRadius:"10px"}}>
  <img class="mr-3" src="/assets/images/tuts.jpg" style={{width:"190px",height:'175px'}} alt="Generic placeholder image"/>
  <div class="media-body" style={{fontFamily:"serif",color:"#fff",paddingTop:"5px"}}>
    <h5 class="mt-0" style={{fontFamily:"serif"}}>SDKMan Tool</h5>
     If You are working on unix based system and also want to maintain diiferent versions of java in the same machine and switch between them,then surely you would want to read this article.<br /><br />
    <a href="https://tutswiki.com/sdkman-installing-multiple-versions-java-same-machine/" className="btn btn-primary link">View Article</a>  
  </div>
</div>
          <div class="media" style={{marginBottom:"65px",boxShadow:"0 4px 8px 0 #59656F, 0 6px 20px 0 #59656F",border:"3px solid #9984D4" ,paddingRight:"5px",borderRadius:"10px"}}>
  <img class="mr-3" src="/assets/images/tuts.jpg" style={{width:"190px",height:'175px'}} alt="Generic placeholder image"/>
  <div class="media-body" style={{fontFamily:"serif",color:"#fff",paddingTop:"5px"}}>
    <h5 class="mt-0" style={{fontFamily:"serif"}}>Java RegEx</h5>
    Regular Expression which is heavily used in real world, for example like email validation etc. This article explains what are they and how are they implemented in java.Go hava a look!!<br /><br />
    <a href="https://tutswiki.com/java/regex/" className="btn btn-primary link">View Article</a>  
  </div>
</div>
          <div class="media" style={{marginBottom:"65px",boxShadow:"0 4px 8px 0 #59656F, 0 6px 20px 0 #59656F",border:"3px solid #9984D4" ,paddingRight:"5px",borderRadius:"10px"}}>
  <img class="mr-3" src="/assets/images/tuts.jpg" style={{width:"190px",height:'175px'}} alt="Generic placeholder image"/>
  <div class="media-body" style={{fontFamily:"serif",color:"#fff",paddingTop:"5px"}}>
    <h5 class="mt-0" style={{fontFamily:"serif"}}>Lambda Expressions in Java</h5>
    What are lambda expression,what are variable and method capture in lamba and their types,code implementation of all and some miscellaneous examples are also provided in te article.<br /><br />
    <a href="https://tutswiki.com/java/lambda-expressions/" className="btn btn-primary link">View Article</a>  
  </div>
</div>
          <div class="media" style={{marginBottom:"65px",boxShadow:"0 4px 8px 0 #59656F, 0 6px 20px 0 #59656F",border:"3px solid #9984D4" ,paddingRight:"5px",borderRadius:"10px"}}>
  <img class="mr-3" src="/assets/images/tuts.jpg" style={{width:"190px",height:'175px'}} alt="Generic placeholder image"/>
  <div class="media-body" style={{fontFamily:"serif",color:"#fff",paddingTop:"5px"}}>
    <h5 class="mt-0" style={{fontFamily:"serif"}}>Overloading and Overriding in Java</h5>
    Method overriding and Method Overloading , what does these two terms mean,what are the differences between them and how are they implemented in Java is explained in this article.<br /><br />
   <a href="https://tutswiki.com/method-overload-vs-override-java-differences/" className="btn btn-primary link">View Article</a>  
  </div>
</div>
          <div class="media" style={{marginBottom:"65px",boxShadow:"0 4px 8px 0 #59656F, 0 6px 20px 0 #59656F",border:"3px solid #9984D4" ,paddingRight:"5px",borderRadius:"10px"}}>
  <img class="mr-3" src="/assets/images/tuts.jpg" style={{width:"190px",height:'175px'}} alt="Generic placeholder image"/>
  <div class="media-body" style={{fontFamily:"serif",color:"#fff",paddingTop:"5px"}}>
    <h5 class="mt-0" style={{fontFamily:"serif"}}>Java Annotations</h5>
   What are Java Annotationa , what are its types their explanation with implementation (java code) and how do they help developers to reduce errors in their code is provided in this article.<br /><br />
   <a href="https://tutswiki.com/java/annotations/" className="btn btn-primary link">View Article</a>  
  </div>
</div>
          <div class="media" style={{marginBottom:"65px",boxShadow:"0 4px 8px 0 #59656F, 0 6px 20px 0 #59656F",border:"3px solid #9984D4" ,paddingRight:"5px",borderRadius:"10px"}}>
  <img class="mr-3" src="/assets/images/tuts.jpg" style={{width:"190px",height:'175px'}} alt="Generic placeholder image"/>
  <div class="media-body" style={{fontFamily:"serif",color:"#fff",paddingTop:"5px"}}>
    <h5 class="mt-0"style={{fontFamily:"serif"}}>Java Garbage Collection</h5>
    What is Garbage Collection,how can we perform it, how does it takes place and protects the java program from memory leaks is explained in this article.<br /><br />
    <a href="https://tutswiki.com/java/garbage-collection/" className="btn btn-primary link">View Article</a>  
  </div>
</div>
       
        </div>
        </Fade>
</div>  
       
    )
}


export default Coding

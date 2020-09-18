import React, {useState} from "react";
import Modal3 from "./Modal3"
import andruw1 from "../images/andruw1.jpg";

import steve1 from "../images/steve1.JPG";
import steve3 from "../images/steve3.JPG";
import steve2 from "../images/steve2.JPG";

const Home = () => {
 


  const [modal, setModal] = useState(false)


  const onClick = e=>{
    setModal(prevState => !prevState)
  }
  return (
    <div>

<h3 className ='all-center text-danger'>Warning: Tax Debt Group Is A Scam </h3>
<div className='grid-2 container'>


      <div className='container' style={{marginTop:'7.5rem', marginLeft:'7.5rem'}} > 
     
  
      <br/>
   
        
      <i className='lead'>"Thank you for visiting my site.  My name is Ian Smith and I live in South Africa. I have made this site in hopes to warn people about a fugitive who ripped me off for nearly a million US dollars and appears to be doing it again now that he is back in the US.  His name is Andrew Rapport although he has many alias's. In the past he has used Andruw Stephens, Drew Rapport and now operates as "Director" for Tax Debt Group under the alias Drew Ropport." </i>
      <br/>
      <b className='all-center'>- Ian Smith</b>
      </div>
<div className='all-center' style={{marginTop:'7.5rem'}}>
<h2 style={{ color: "blue" }}>ANDREW STEVEN RAPPORT</h2>{" "}
<h2 style={{ color: "blue" }}>AKA</h2>
      <h2 style={{ color: "blue" }}>DREW ROPPORT </h2> 
      <h2 style={{ color: "blue" }}>AKA</h2>
      <h2 style={{ color: "blue" }}>ANDRUW STEPHENS</h2>{" "}

        <img src={andruw1} style={{ height: "400px", width: "300px" }} alt='' /> <br/>
        YOU CAN FIND INFORMATION ABOUT HIM HERE{" "}
        <a
          style={{ color: "blue", textDecoration: "underline" }}
          href='https://twitter.com/fraudwatchza/status/972779128708587520'
          target='_blank'
          rel='noopener noreferrer'
      >
          READ MORE
        </a>
        <button className ='btn btn-dark' onClick={onClick}> Submit  </button>

        </div>

      
        </div>

<br/>
<br/>
{ modal ? 
<div className='container'> 
<Modal3/>
</div>:''}
        <div className='container'>

        He is once again misrepresenting himself as an attorney but now selling tax relief services at Tax Debt Group (taxdebtgroup.com) located at 6600 Sunset Blvd, Hollywood, CA 90028.  The owner Benjamin Graupner is aware of "Drew" being a fugitive and continues to employ him.  He tells folks looking for help that he is an attorney, a graduate of the University of Southern California with two degrees and only takes on cases that he can help on.  He is recognizable by his South African accent and nasely voice. <br/> From what I am told he has a very bad substance abuse problem and it has destroyed the cartilage in his nose.  
Recently Tax Debt Group partnered with American Tax Solutions.  American Tax Solutions (https://www.atsco.tax/) owner is disbarred attorney Terry Selb.  Terry provides the advertising for Ben and Drew via fake IRS letters that deceive the public into calling what they believe to be a government agency.  The practice at America is to also tell people they are attorneys. 
        </div>

        <div className='container p-2'>

        Summary: <br/> <b>A lawyer in South Africa has been classified as a fugitive after he disappeared with millions from his law firm’s accounts.</b><br/>
South Africa is on the hunt for an attorney accused of misappropriating $150 million in South African Rands, equivalent to roughly $12.47 million US dollars. Andruw Stephens is accused of using his position at the law firm where he worked to steal from the firm’s accounts and client trusts, according to Independent Online or IOL. He suddenly went on the run when the clients began to question him and the allegations started coming in.
Stephens, a US-born lawyer, was working as the financial director of the Sandton-based law firm Dadic Attorneys since 2011.  <br/>The law firm describes Stephens on their website as instrumental in gaining big clients like Dimension Data, Bidvest Crown National, and Sephaku Cement.
When Stephens suddenly disappeared, along with the millions in question, the IRS Forensic Investigations, Hawks, Attorneys Fidelity Fund and Law Society of South Africa opened investigations into Stephens and the missing funds. <br/> IRS Chief forensic investigator Chad Thomas said, “A criminal case was registered at a local police station in Joburg and was promptly transferred to the Johannesburg Specialized Commercial Crimes Unit of the Hawks.”
Thomas added, “Captain Nieuwoudt, who is in charge of the investigation, wasted no time in obtaining an arrest warrant for the suspect, who is now regarded as a fugitive. Further to the criminal case under investigation by the Hawks, IRS sent formal correspondence to the Law Society of the Northern Provinces as well as to the Attorneys Fidelity Fund to advise them of the case and the probability that a claim against the fund would be initiated based on the fact that the law firm known as Dadic was allegedly used as a conduit for the suspect to commit the fraud. IRS also submitted a report in terms of section 34 of the Prevention and Combating of Corrupt Activities Act to the reporting officer at the Hawks head office.”
One victim of Stephen’s scheme was the director of a multinational logistics company. He told The Saturday Star that he estimates he lost 60 million Rands. Stephens had been representing his company for four years, overseeing the borrowing and lending contracts. The victim learned just last week that Stephens was forging his signature on numerous deals without his permission and the company’s accounts are now empty.
<br/>The director knew something was amiss in December when Stephens owed the company several outstanding payments. Stephens gave an excuse that his trust accounts had been frozen by the law society but things would be straightened out soon so he could make the payments. Stephens was using the same excuse up until this week when the two were scheduled to meet. The director said, “He was in Joburg last week for the funeral of a friend, but after that, it was impossible to reach him.”
With Stephens gone, his scheme became evident. There are at least eight complainants from private individuals and companies against Stephens.
The former owner of Dadic Attorneys, Davor Dadic who is now located in Australia, is cooperating with the investigation. <br/> He said the moment he heard what Stephens had done, he reported him to the law society. He said, “He has abused the trust we placed in him.”
Stephens is not a member of the South African Bar Association so he is not a registered lawyer in South Africa. Investigators know that Stephens was in Joburg last week for the funeral and has been tracked to numerous places since.
One account states he was released from a psychiatric ward in the Cape. He has a Ghanaian passport and also goes by the name Andrew Stephen Rapport.


        </div>

      <div className='grid-3 container'>
        <div>
          <img
            src={steve1}
            style={{
              width: "200px",
              height: "200px",
            }}
            alt='ben graupner'
          />
        </div>
        <div>
          <img
            src={steve2}
            style={{
              width: "200px",
              height: "200px",
            }}
            alt='ben graupner'
          />
        </div>
        <div>
          <img
            src={steve3}
            style={{
              width: "200px",
              height: "200px",
            }}
            alt='ben graupner'
          />
        </div>
      </div>

      </div>
    
  );
};

export default Home;

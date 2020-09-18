import React from "react";
import steve2 from "../images/steve1.JPG";

const Modal = (props) => {
  return (
    <div>
      <span style={{ float: "right" }}>
        <button onClick={props.toggleModal}> X</button>
      </span>

      <span className='all-center'>
        <img src={steve2} alt='' style={{ height: "500px", width: "500px" }} />
      </span>
      <div className='container card'>
        Summary: A lawyer in South Africa has been classified as a fugitive
        after he disappeared with millions from his law firm’s accounts.
        <br /> South Africa is on the hunt for an attorney accused of
        misappropriating $150 million in South African Rands, equivalent to
        roughly $12.47 million US dollars. Andruw Stephens is accused of using
        his position at the law firm where he worked to steal from the firm’s
        accounts and client trusts, according to Independent Online or IOL. He
        suddenly went on the run when the clients began to question him and the
        allegations started coming in. <br /> Stephens, a US-born lawyer, was
        working as the financial director of the Sandton-based law firm Dadic
        Attorneys since 2011. The law firm describes Stephens on their website
        as instrumental in gaining big clients like Dimension Data, Bidvest
        Crown National, and Sephaku Cement.
        <br /> When Stephens suddenly disappeared, along with the millions in
        question, the IRS Forensic Investigations, Hawks, Attorneys Fidelity
        Fund and Law Society of South Africa opened investigations into Stephens
        and the missing funds. IRS Chief forensic investigator Chad Thomas said,
        “A criminal case was registered at a local police station in Joburg and
        was promptly transferred to the Johannesburg Specialized Commercial
        Crimes Unit of the Hawks.” <br /> Thomas added, “Captain Nieuwoudt, who
        is in charge of the investigation, wasted no time in obtaining an arrest
        warrant for the suspect, who is now regarded as a fugitive. Further to
        the criminal case under investigation by the Hawks, IRS sent formal
        correspondence to the Law Society of the Northern Provinces as well as
        to the Attorneys Fidelity Fund to advise them of the case and the
        probability that a claim against the fund would be initiated based on
        the fact that the law firm known as Dadic was allegedly used as a
        conduit for the suspect to commit the fraud. IRS also submitted a report
        in terms of section 34 of the Prevention and Combating of Corrupt
        Activities Act to the reporting officer at the Hawks head office.”{" "}
        <br />
        One victim of Stephen’s scheme was the director of a multinational
        logistics company. He told The Saturday Star that he estimates he lost
        60 million Rands. Stephens had been representing his company for four
        years, overseeing the borrowing and lending contracts. The victim
        learned just last week that Stephens was forging his signature on
        numerous deals without his permission and the company’s accounts are now
        empty.
        <br /> The director knew something was amiss in December when Stephens
        owed the company several outstanding payments. Stephens gave an excuse
        that his trust accounts had been frozen by the law society but things
        would be straightened out soon so he could make the payments. Stephens
        was using the same excuse up until this week when the two were scheduled
        to meet. The director said, “He was in Joburg last week for the funeral
        of a friend, but after that, it was impossible to reach him.”
        <br /> With Stephens gone, his scheme became evident. There are at least
        eight complainants from private individuals and companies against
        Stephens. <br /> The former owner of Dadic Attorneys, Davor Dadic who is
        now located in Australia, is cooperating with the investigation. He said
        the moment he heard what Stephens had done, he reported him to the law
        society. He said, “He has abused the trust we placed in him.”
        <br /> Stephens is not a member of the South African Bar Association so
        he is not a registered lawyer in South Africa. Investigators know that
        Stephens was in Joburg last week for the funeral and has been tracked to
        numerous places since.
        <br /> One account states he was released from a psychiatric ward in the
        Cape. He has a Ghanaian passport and also goes by the name Andrew
        Stephen Rapport.
      </div>
    </div>
  );
};

export default Modal;

import React, { useState, useCallback } from "react";
import NewsItem from "./NewsItem";
import YouTube from "react-youtube";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import Modal from "./Modal";
import Modal2 from "./Modal2";
import "pure-react-carousel/dist/react-carousel.es.css";
import img from "../images/img.png";
import ben1 from "../images/ben1.gif";
import ben2 from "../images/ben2.jpg";
import ben3 from "../images/ben3.jpg";
import andruw1 from "../images/andruw1.jpg";
import ben4 from "../images/ben4.gif";
import ben5 from "../images/ben5.mp4";
import ben6 from "../images/ben6.mp4";
import ben7 from "../images/ben7.mp4";
import ben8 from "../images/ben8.jpg";
import ben9 from "../images/ben9.png";
import corp1 from "../images/corp1.jpg";
import corp2 from "../images/corp2.jpg";
import corp3 from "../images/corp3.jpg";
import geoff1 from "../images/geoff1.jpg";
import geoff2 from "../images/geoff2.jpg";
import geoff3 from "../images/geoff3.jpg";
import ny1 from "../images/ny1.jpg";
import ny2 from "../images/ny2.jpg";
import terry1 from "../images/terry1.jpg";
import Modal3 from "./Modal3";
import ny3 from "../images/ny3.jpg";
import ny4 from "../images/ny4.jpg";
import img6 from "../images/img6.jpg";
import steve1 from "../images/steve1.JPG";
import steve3 from "../images/steve3.JPG";
import steve2 from "../images/steve2.JPG";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import img10 from "../images/letterfront.jpg";
import hero from "../images/hero.jpg";
import venmo0 from "../images/Venmo-Front.jpg";
import venmo1 from "../images/Venmo-1.jpg";
import venmo2 from "../images/Venmo-2.jpg";
import venmo3 from "../images/Venmo-3.jpg";
import venmo4 from "../images/Venmo-4.jpg";
import venmo5 from "../images/Venmo-5.jpg";
import venmo6 from "../images/Venmo-6.jpg";
import venmo7 from "../images/Venmo-7.jpg";
import venmo8 from "../images/Venmo-8.jpg";
import venmo9 from "../images/Venmo-9.jpg";
import terrychris from "../images/terrychris.png";
import criminal from "../images/criminal.jpg";
const Home = () => {
  const news = [
    {
      URL:
        "https://www.nbc12.com/2019/04/05/law-enforcement-warns-tax-letter-scam/",
      state: "Virginia",
      date: "4 / 5 / 2019",
      type: "video",
      quote:
        "The Bureau of Tax Enforcement does not exist and is used by criminals as an attempt to make fake documents appear legitimate, the sheriff’s office said.",
    },
    {
      URL:
        "https://www.live5news.com/2019/03/13/live-scambusters-orangeburg-sheriff-warns-about-threatening-tax-letter-now-circulating/",
      state: "South Carolina",
      date: "3 / 13 / 2019",
      type: "video",
      quote:
        "If you receive a letter like this, report it to your local law enforcement agency or call Crimestoppers at 1-888-CRIME-SC.",
    },
    {
      URL:
        "https://fox17online.com/2019/04/10/national-scam-hits-grand-rapids-area/",
      state: "Michigan",
      date: "4 / 10 / 2019",
      type: "video",
      quote:
        'That’s what the scammers are really counting on, that fear," said Troy Baker, with the BBB. "If you have the name of the IRS, the seal, some kind of official logo on it, it all leads to that credibility.',
    },
    {
      URL:
        "https://www.wgal.com/article/scam-targets-pennsylvania-taxpayers/22815609",
      state: "Pennsylvania",
      date: "8 / 27 / 2018",
      type: "video",
      quote:
        "WGAL consumer reporter Brian Roche called the number in the letter and spoke to a man named Chris who claimed he was with a law firm in Delaware. Chris insisted the letter isn't a scam but wouldn't say who he was representing.",
    },
    {
      URL:
        "https://www.cleveland19.com/2019/04/06/medina-police-issue-alert-about-distraint-warrant-scam/",
      state: "Ohio",
      date: "4 / 6 / 2019",
      type: "novideo",
      quote:
        "Police said the resident was able to recognize the letter as a scam and did not follow its instructions. They have released a copy of the letter in hopes that it may prevent others from potentially being conned out of their hard-earned money.",
    },
    {
      URL:
        "https://www.wistv.com/2020/03/12/mail-scam-targeting-lexington-county-residents-threatens-wage-garnishment-property-seizure/",
      state: "South Carolina",
      date: "3 / 12 / 2020",
      type: "novideo",
      quote:
        "Residents can also report a scam directly to the IRS by clicking here.",
    },
    {
      URL: "https://abcnews4.com/news/local/berkeley-county-warns-of-tax-scam",
      state: "South Carolina",
      date: "6 / 20 / 2019",
      type: "novideo",
      quote:
        "In one instance, a Summerville business received a letter from the “state of South Carolina Tax Lien Action” threatening foreclosure",
    },
    {
      URL:
        "https://nbc16.com/news/local/homeowners-beware-fraud-claiming-imminent-property-seizure-makes-its-way-to-lane-county",
      state: "Oregon",
      date: "3 / 11 / 2019",
      type: "novideo",
      quote:
        "1) A full agency name is not clearly provided. 2)The logo is a generic seal that does not properly identify any agency. 3) There is no “Bureau of Tax Enforcement” located in Eugene. 4) Lane County does not have an “Office of Lien Filings.”",
    },
    {
      URL:
        "https://wsbt.com/news/local/scam-alert-letter-targeting-berrien-county-residents-is-fake-say-officials",
      state: "Michigan",
      date: "6 / 25 / 2019",
      type: "novideo",
      quote:
        "The letter is signed by a person named “Richard Herts.” There is no person by that name that works for Berrien County.",
    },
    {
      URL:
        "https://www.courier-journal.com/story/news/2019/03/29/tax-scams-kentucky-attorney-general-warns-fake-unpaid-tax-letters/3310358002/",
      state: "Kentucky",
      date: "3 / 29 / 2019",
      type: "novideo",
      quote:
        "Attorney General Andy Beshear issued a scam alert Friday after an employee of a Kentucky church received a property tax delinquency notice from a fake agency threatening to seize control of the church property....",
    },
    {
      URL:
        "https://www.columbiadailyherald.com/news/20190513/irs-scam-hits-spring-hill",
      state: "Tennesee",
      date: "5 / 13 / 2019",
      type: "novideo",
      quote:
        "Officers advise citizens who think they may owe taxes to contact the IRS at 1 (800) 829-1040. The Treasury Inspector Potential IRS scams can also be reported to the General for Tax Administration at www.treasury.gov/tigta/contact report scam.shtml.",
    },
    {
      URL:
        "https://www.fox43.com/article/news/local/contests/state-warns-of-scam-that-threatens-residents-with-legal-action-for-not-paying-phony-tax-debts/521-0266f65b-6c19-436e-b177-42041daf2b03",
      state: "Pennsylvania",
      date: "8 / 23 / 2018",
      type: "novideo",
      quote:
        "If you believe you are a victim of this scam or have been targeted by a con artist, contact your local law enforcement agency. You can also call the Attorney General’s Bureau of Consumer Protection at 800-441-2555.",
    },
    {
      URL: "https://www.wsjm.com/2019/06/21/treasurer-warns-of-new-scam/",
      state: "Michigan",
      date: "6 / 21 / 2019",
      type: "novideo",
      quote:
        "There’s a legal process, and we at the county level will never tell you to call us, or otherwise we’re seizing it.”",
    },
    {
      URL: "https://www.kmvt.com/content/news/490199331.html",
      state: "Idaho",
      date: "8 / 6 / 2018",
      type: "video",
      quote:
        "“What really gives it away is if your taxes are not paid by, well the date is August 8, 2017. That was last year,” he said.",
    },
    {
      URL:
        "https://www.valdostadailytimes.com/news/local_news/tax-commissioner-beware-phony-letters/article_941ddbe8-09c7-59d3-8d60-943999fb00cd.html",
      state: "Georgia",
      date: "10 / 5 / 2018",
      type: "novideo",
      quote:
        "Lowndes County's tax office would have both a physical address and a local telephone number included, he said. The number on the bogus letter is an \"866\" toll-free number and the letter doesn't have an address of any kind.",
    },
    {
      URL:
        "https://cumberlink.com/news/local/crime-and-courts/department-of-revenue-warns-of-tax-mailer-scam/article_6d3d0f31-9cd8-5214-9917-a93b46252e1f.html",
      state: "Pennsylvania",
      date: "8 / 23 / 2018",
      type: "novideo",
      quote:
        "The mailer urges recipients to call a provided phone number immediately to avoid criminal penalty, property seizure and civil proceedings. The provided phone number is said to connect callers with a “levy and warrant officer.”",
    },
    {
      URL:
        "https://www.wistv.com/2020/03/11/officials-lexington-co-warn-mail-scam-targeting-residents-with-federal-liens/",
      state: "South Carolina",
      date: "3 / 11 / 2018",
      type: "novideo",
      quote:
        "“In real-world cases, the IRS will utilize in-person notification for property seizure and does not mail out property seizure notices to any U.S. citizen.”",
    },
    {
      URL:
        "https://www.irs.gov/newsroom/irs-reminder-tax-scams-continue-year-round",
      state: "IRS",
      date: "6 / 5 / 2019",
      type: "novideo",
      quote:
        "Fake tax agency. This scheme involves the mailing of a letter threatening an IRS lien or levy. The lien or levy is based on bogus delinquent taxes owed to a non-existent agency, “Bureau of Tax Enforcement.” There is no such agency. The lien notification scam also likely references the IRS to confuse potential victims into thinking the letter is from a legitimate organization.",
    },
    {
      URL:
        "https://www.counton2.com/news/local-news/scam-alert-letter-being-sent-that-threatens-property-seizure-if-taxes-arent-paid/",
      state: "South Carolina",
      date: "3 / 12 / 2019",
      type: "novideo",
      quote:
        "However, there are several flaws, some of which are that the letter implies two agencies – both state and county – without declaring who is the charging agency.",
    },
    {
      URL:
        "https://mylocalradio.com/attorney-general-state-tax-commission-warn-idahoans-of-new-tax-scam/",
      state: "Idaho",
      date: "12 / 17 / 2018",
      type: "novideo",
      quote:
        "The mailer was labeled as a “Notice of Default Pending Execution” and included two seals – though not official state seals – at the top. The scammers included a working telephone number in order to continue the fraud attempt via phone.",
    },
    {
      URL:
        "https://www.wtap.com/content/news/Deputies-warn-of-new-tax-scam-ahead-of-filing-deadline-508466151.html",
      state: "Ohio",
      date: "4 / 19 / 2019",
      type: "video",
      quote:
        "The letter also stated the person must respond by the due date listed on the letter, pay in full, or call them to avoid action. Officials say do not call that number.",
    },
    {
      URL:
        "https://www.delawarepublic.org/post/delaware-division-revenue-warns-new-taxpayer-scam",
      state: "Delaware",
      date: "4 / 27 / 2019",
      type: "novideo",
      quote:
        '“You know, think about it," she said. "That puts the taxpayer in the worst possible place. They pay a third party, they don’t get credit for it because they haven’t paid us and you know they still owe the state.”',
    },
    {
      URL:
        "https://www.reporterherald.com/2019/11/04/larimer-treasurer-warns-of-tax-lien-scam/",
      state: "Colorado",
      date: "11 / 4 / 2019",
      type: "novideo",
      quote:
        "“The federal government does not collect local property taxes, nor does it have authority to engage in or enforce local property tax collection,” Josey said.",
    },
    {
      URL:
        "https://lcvalley.dailyfly.com/Home/ArtMID/1352/ArticleID/51732/New-Tax-Scam-Warning",
      state: "Idaho",
      date: "12 / 18 / 2018",
      type: "novideo",
      quote:
        "The state Tax Commission Chairman says they’re working with law enforcement to identify the criminals.",
    },
    {
      URL:
        "https://gephardtdaily.com/local/davis-county-officials-dont-fall-for-tax-scam",
      state: "Utah",
      date: "2 / 8 / 2020",
      type: "novideo",
      quote:
        "“‪If you receive taxes due/lien notices, always check with the respective government authorities PRIOR to making ANY payments and/or sharing financial account(s) details,” the Davis County Sheriff’s Office posted on Facebook.‬",
    },
    {
      URL:
        "https://www.freep.com/story/money/personal-finance/susan-tompor/2019/06/21/hot-tax-scams-summer/1522060001/",
      state: "Michigan",
      date: "6 / 21 / 2019",
      type: "novideo",
      quote:
        "The lien or levy is based on bogus delinquent taxes owed to a nonexistent agency, 'Bureau of Tax Enforcement,' \" the IRS said in its release.",
    },
    {
      URL:
        "https://www.mlive.com/news/2020/01/tax-scam-relies-on-fake-letters-state-officials-warn.html",
      state: "Michigan",
      date: "1 / 4 / 2020",
      type: "novideo",
      quote:
        "Taxpayers who receive a letter from a scammer or have questions about their state debts should call Treasury’s Collections Service Center at (517) 636-5265.",
    },
    {
      URL:
        "https://patch.com/new-york/northfork/new-york-state-warns-residents-fake-letters-tax-scam",
      state: "New York",
      date: "8 / 30 / 2019",
      type: "novideo",
      quote:
        "The return address on this letter, which was sent to at least one person, is: Tax Processing Center  Internal Processing Service Public Judgement Records",
    },
    {
      URL:
        "https://www.wndu.com/content/news/Michigan-Treasury-Department-warns-of-scam-circulating-in-US-mail-566693721.html",
      state: "Michigan",
      date: "1 / 3 / 2020",
      type: "novideo",
      quote:
        "“This is a tricky scam that’s been reported throughout the state over the past year,” said Deputy state Treasurer Ann Good. “Taxpayers have rights. If you have questions about an outstanding state tax debt, please contact us through a verified number so we can talk about options.”",
    },
    {
      URL:
        "https://www.ksl.com/article/46715001/authorities-warn-citizens-about-tax-scam-in-davis-county",
      state: "Utah",
      date: "2 / 8 / 2020",
      type: "novideo",
      quote:
        "‪If you receive taxes due/lien notices, always check with the respective government authorities PRIOR to making ANY payments and/or sharing financial account(s) details:‬ ‪IRS (federal): 1-800-829-4933‬ ‪Utah state Tax Commission: 801-297-2200",
    },
    {
      URL:
        "https://www.theindychannel.com/news/local-news/tax-scam-targets-marion-county-residents",
      state: "Indiana",
      date: "5 / 17 / 2019",
      type: "novideo",
      quote:
        "If you're not sure whether a letter you receive is real or a scam, call the DOR at: 317-232-2240.",
    },
    {
      URL:
        "https://www.mininggazette.com/news/2020/01/treasury-scammers-using-fake-letters-in-collections-scam/",
      state: "Michigan",
      date: "1 / 6 / 2020",
      type: "novideo",
      quote:
        "The letter aggressively threatens to seize a taxpayer’s assets ― including property and Social Security benefits ― if the state tax debt is not settled.",
    },
    {
      URL:
        "https://www.kivitv.com/news/idaho-tax-commission-watch-out-for-this-scam",
      state: "Idaho",
      date: "12 / 31 / 2019",
      type: "novideo",
      quote:
        "“This is similar to other scams we’ve seen that use the county where the targeted taxpayer lives as the location of the fraudulent tax unit to make the mailing seem more official,” Tax Commission Chairman Tom Harris said.",
    },
    {
      URL:
        "https://www.bbb.org/us/ca/los-angeles/profile/tax-consultant/american-tax-solutions-1216-889700",
      state: "California",
      date: "5 / 18 / 2018",
      type: "terryinfo",
      quote:
        "****** was very hostile on 12/18/19 after asking for a full refund of our $500.00 they have not done any work they agreed to do since oct 25 2019 As they agreed to do they have charged my bank account under TNT which is I didnt hire and been very unprofessional and hostile toward me and my husband been refused to talk to the ceo on multiple occasions. I want a full refund of my $500.00",
    },
    {
      URL: "https://www.yelp.com/biz/american-tax-solutions-chicago",
      state: "Illinois",
      date: "8 / 20 / 2019",
      type: "terryinfo",
      quote:
        'Overall me and my husband gave them $6000 only to learn they were frauds. They collected the first $3000 and then turned around and asked us for more because our case was more "complicated than they realized',
    },
    {
      URL: "https://www.corporationwiki.com/p/2y767m/terry-selb",
      state: "Nevada",
      date: "5 / 18 / 2018",
      type: "terryinfo",
      quote:
        "Terry Selb has been associated with two companies, according to public records. The companies were formed over a one year period with the most recent being incorporated two years ago in January of 2018.",
    },
    {
      URL: "https://opencorporates.com/companies/us_nv/E0024212018-7",
      state: "California",
      date: "12 / 31 / 2018",
      type: "terryinfo",
      quote:
        "2018-01-16 - 2018-10-13 Addition of officer TERRY SELB, treasurer",
    },
    {
      URL: "https://www.sccgov.org/sites/dtac/tax/Pages/tax.aspx",
      state: "California",
      date: "3 / 16 / 2020",
      type: "novideo",
      quote:
        "The mailer falsely claims that an identified homeowner has a lien balance that is owed to the state of California, and that the homeowner is about to face a foreclosure action.",
    },
    {
      URL:
        "https://arkansasag.gov/media-center/consumer-alerts/tax-scammers-send-fake-letters/",
      state: "Arkansas",
      date: "3 / 20 / 2019",
      type: "novideo",
      quote:
        "The Arkansas Attorney General’s office has received reports of a scam being sent through the mail which appears to be a letter from the so-called “Bureau of Tax Enforcement for Pulaski County”—an entity that does NOT exist—claiming the recipient owes money to another state.",
    },
    {
      URL:
        "https://kentucky.gov/Pages/Activity-stream.aspx?n=AttorneyGeneral&prId=744",
      state: "Kentucky",
      date: "3 / 29 / 2019",
      type: "novideo",
      quote:
        "“With the thought of losing a property, even the savviest Kentuckian could be forced into a panic and fall victim to a property tax scam,” said Beshear. “It is important that Kentuckians contact their county or state tax official to verify any actual property tax debt before making a payment and never pay over the phone.”",
    },
    {
      URL:
        "https://news.delaware.gov/2019/04/24/scam-alert-revenue-warns-taxpayers-of-fraudulent-letters/",
      state: "Delaware",
      date: "4 / 24 / 2019",
      type: "novideo",
      quote:
        "Victims may receive a letter from “The Bureau of Tax Enforcement” that threatens property seizure and wage garnishment unless they call a toll-free number to “avoid enforcement.”",
    },
    {
      URL: "https://tax.idaho.gov/n-feed.cfm?idd=4277",
      state: "Idaho",
      date: "4 / 11 / 2019",
      type: "novideo",
      quote:
        "The mailing sent to the Middleton resident was from the “Benefits Suspension Unit” in Canyon County. No such unit exists. The mailer was labeled as a “Notice of Intent (to) Levy Social Security Benefits” and threatened to garnish the recipient’s Social Security benefits, wages, bank accounts and federal tax refunds.",
    },
    {
      URL: "https://tax.idaho.gov/n-feed.cfm?idd=4293",
      state: "Idaho",
      date: "12 / 31 / 2019",
      type: "novideo",
      quote:
        "The alert was issued after the Tax Commission and the Idaho Attorney General’s Office warned Idahoans of a similar fraud scheme in April.",
    },
    {
      URL:
        "https://www.wivb.com/news/nys-department-of-taxation-and-finance-warning-public-of-scam-targeting-taxpayers/",
      state: "New York",
      date: "8 / 30 / 2019",
      type: "novideo",
      quote:
        "Officials say letters coming by mail demand payment for outstanding tax debt and threaten to take away the person’s passport and drivers license. The state says it never threatens arrest or to take away your passport.",
    },
    {
      URL:
        "https://upnorthlive.com/news/local/sheriff-beware-of-tax-scam-being-sent-through-mail",
      state: "Michigan",
      date: "2 / 8 / 2020",
      type: "novideo",
      quote:
        "I called the 800 number and the gentleman answered. I ask him who he was representing and he said Kalkaska County, of which I continued to ask more questions,” Kalkaska County Treasurer Valerie Thornburg said. “He turned it on me and basically said he feels like he was being scammed so he was going to hang up on me.",
    },
    {
      URL:
        "https://www.counton2.com/news/local-news/berkeley-county-news/possible-tax-scam-in-berkeley-county/",
      state: "South Carolina",
      date: "6 / 21 / 2019",
      type: "video",
      quote:
        "The Berkeley County Tax Office has informed residents to be aware of fake tax letters from “state of South Carolina Tax Lien Action” that have been showing up in mailboxes. The office says these letters are scam, threatening to take legal action against the taxpayer, trying to trick people out of thousands of dollars. A similar scam was reported in Georgia in 2018.",
    },
    {
      URL:
        "https://www.facebook.com/KanawhaSheriff/posts/1025827154432831?__tn__=-R",
      state: "West Virginia",
      date: "12 / 4 / 2019",
      type: "novideo",
      quote:
        "Another scam is going around. This one involves a letter allegedly from the Kanawha County Sheriff's Office's Tax Division. Always independently verify the numbers you're dialing are correct before providing any information to someone you don't know.",
    },
    {
      URL:
        "https://www.irs.gov/newsroom/taxpayers-should-beware-of-property-lien-scam",
      state: "IRS",
      date: "9 / 26 / 2019",
      type: "novideo",
      quote:
        "The non-existent agencies might have a legitimate-sounding name like the “Bureau of Tax Enforcement.” There is no such agency.",
    },
    {
      URL:
        "https://www.michigan.gov/som/0,4669,7-192-29943_34759-515819--,00.html",
      state: "Michigan",
      date: "1 / 3 / 2020",
      type: "novideo",
      quote:
        "In the scheme, taxpayers receive what appears to be a government-looking letter about an overdue tax bill, asking individuals to immediately contact a toll-free number to resolve a state tax debt. The letter aggressively threatens to seize a taxpayer’s assets ― including property and Social Security benefits ― if the state tax debt is not settled.",
    },
    {
      URL:
        "https://www.michigan.gov/treasury/0,4679,7-121-1755_1963-515819--,00.html",
      state: "Michigan",
      date: "1 / 3 / 2020",
      type: "novideo",
      quote:
        "Taxpayers who receive a letter from a scammer or have questions about their state debts should call Treasury’s Collections Service Center at 517-636-5265. A customer service representative can log the scam, verify outstanding state debts and provide flexible payment options.",
    },
    {
      URL: "https://www.tax.ny.gov/press/rel/2019/scamletter083019.htm",
      state: "New York",
      date: "8 / 30 / 2019",
      type: "novideo",
      quote:
        "The Federal Trade Commission (FTC) should also be alerted. You can file a complaint on the FTC webor by calling 1-877-FTC-HELP (1-877-382-4357).",
    },
    {
      URL:
        "https://www.reporterherald.com/2019/11/04/larimer-treasurer-warns-of-tax-lien-scam/",
      state: "Colorado",
      date: "11 / 4 / 2019",
      type: "novideo",
      quote:
        "The notice, which has been sent in the mail, claims that a tax lien has been placed on the resident’s property for non-payment of taxes and urges the resident to call (800) 279-0231 to avoid enforcement through garnished wages, seized property or seized tax returns. The letter claims to be from the “Tax Processing Unit in Larimer County, Public Judgment of Records.” That entity does not exist, Josey said.",
    },
  ];
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const [modal, setModal] = useState(false);
  const toggleModal = useCallback(() => {
    setModal((prevState) => !prevState);
  }, []);

  const [modal2, setModal2] = useState(false);
  const toggleModal2 = useCallback(() => {
    setModal2((prevState) => !prevState);
  }, []);

  const [modal3, setModal3] = useState(false);
  const toggleModal3 = useCallback(() => {
    setModal3((prevState) => !prevState);
  }, []);

  return (
    <div>


<div className='grid-2'>


      <div className='container' style={{marginTop:'20rem', marginLeft:'10rem'}} > 
      <h1 style={{ color: "blue" }}>ANDRUW STEPHENS AKA</h1>{" "}
        <h2 style={{ color: "blue" }}>ANDREW STEVEN RAPPORT AKA</h2>{" "}
        <h2 style={{ color: "blue" }}>DREW ROPPORT</h2> 
      Thank you for visiting my site.  My name is Ian Smith and I live in South Africa. I have made this site in hopes to warn people about a fugitive who ripped me off for nearly a million US dollars and appears to be doing it again now that he is back in the US.  His name is Andrew Rapport although he has many alias's. In the past he has used Andruw Stephens, Drew Rapport and now operates as "Director" for Tax Debt Group under the alias Drew Ropport. See the BBB listing here. Tax Debt Group | Better Business Bureau® Profile  (I would do a screen shot here)
      </div>
<div className='all-center'>

        <img src={andruw1} style={{ height: "400px", width: "300px" }} alt='' /> <br/>
        YOU CAN FIND INFORMATION ABOUT HIM HERE{" "}
        <a
          style={{ color: "blue", textDecoration: "underline" }}
          href='https://twitter.com/fraudwatchza/status/972779128708587520'
          target='_blank'
          rel='noopener noreferrer'
          onClick={() => setModal(true)}>
          READ MORE
        </a>

        </div>

      
        </div>

<br/>
<br/>
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

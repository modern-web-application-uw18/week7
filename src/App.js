import React from 'react';
import axios from 'axios';
import uwmcImg from './img/uwmc-ex.jpg';
import virginiamasonImg from './img/virginiamason-ex.jpg';
import valleyImg from './img/valley-ex.jpg';
import swedishImg from './img/swedish-ex.jpg';
import northwestImg from './img/northwest-ex.jpg';
import harborviewImg from './img/harborview-ex.jpg';
import './App.css';

//initializing empty arrays to contain our returned data once we make the call to the medicare database:
export default class HospitalList extends React.Component {
  state = {
	hospital500064: [],
	hospital500027: [],
	hospital500001: [],
	hospital500005: [],
	hospital500008: [],
	hospital500088: []
  }

  componentDidMount() {
	//fetching Harborview data from the Medicare database and updating the state of the appropriate array:
    axios.get(`https://data.medicare.gov/resource/ukfj-tt6v.json?provider_id=500064`)
      .then(res => {
        const hospital500064 = res.data;
        this.setState({ hospital500064 });
			})
	//fetching Swedish data from the Medicare database and updating the state of the appropriate array:		
	axios.get(`https://data.medicare.gov/resource/ukfj-tt6v.json?provider_id=500027`)
      .then(res => {
        const hospital500027 = res.data;
        this.setState({ hospital500027 });
			})
	//fetching Northwest data from the Medicare database and updating the state of the appropriate array:		
	axios.get(`https://data.medicare.gov/resource/ukfj-tt6v.json?provider_id=500001`)
      .then(res => {
        const hospital500001 = res.data;
        this.setState({ hospital500001 });
			})
	//fetching Virginia Mason data from the Medicare database and updating the state of the appropriate array:
	axios.get(`https://data.medicare.gov/resource/ukfj-tt6v.json?provider_id=500005`)
      .then(res => {
        const hospital500005 = res.data;
        this.setState({ hospital500005 });
			})
	//fetching UWMC data from the Medicare database and updating the state of the appropriate array:  
	axios.get(`https://data.medicare.gov/resource/ukfj-tt6v.json?provider_id=500008`)
      .then(res => {
        const hospital500008 = res.data;
        this.setState({ hospital500008 });
			})	  
	//fetching Valley Medical Center data from the Medicare database and updating the state of the appropriate array:
	axios.get(`https://data.medicare.gov/resource/ukfj-tt6v.json?provider_id=500088`)
      .then(res => {
        const hospital500088 = res.data;
        this.setState({ hospital500088 });
      })		  
	  
	  
  }

  render() {
    return (
	<div id="container">
		<div id="buttons">
			{/*navigation bar*/}
			<ul className="hospitalnav">
				<li><a href="#harborview">Harborview Medical Center</a></li>
				<li><a href="#swedish">Swedish Hospital</a></li>
				<li><a href="#northwest">Northwest Hospital</a></li>
				<li><a href="#virginiamason">Virginia Mason</a></li>
				<li><a href="#uwmc">UW Medical Center</a></li>
				<li><a href="#valley">Valley Medical Center</a></li>
			</ul>
		</div>
		<div id="topcontainer">
		<div id="infoDivLeft">
		<h1 id="headline">SeaAHD</h1>
		</div>
		<div id="infoDivRight">
		<h2 id="subhead">Seattle Area Hospital Dashboard</h2>
		<h3 id="subsubhead">Quickly compare Seattle area hospitals:</h3>
		<p id="explanation">This application is designed to provide a quick overview of the comparative quality of selected Seattle-area hospitals. Drawing on the <a href="https://data.medicare.gov/Hospital-Compare/Complications-and-Deaths-Hospital/ynj2-r877/data" target="_blank" rel="noopener noreferrer">Medicare Complications and Deaths database</a> that provides data on factors like hospital-acquired infection rates, accidental deaths, and treatment errors, it provides simple, dashboard-level metrics.</p>
		</div>
		</div>
		<div id="hospitalcontainer">
		{/*and now we write the parts of the returned data that we're interested in to unordered lists:*/}	
		<div className="hospital" id="harborview">
			<img src={harborviewImg} alt={"Harborview Medical Center"}/> 
			{ this.state.hospital500064.map(harborviewList =>
			<ul className="data-ul">
				<li class="hospitalname">Harborview Medical Center</li>		
				<li class="category">Category: {harborviewList.measure_name}</li>
				<li>Score: {harborviewList.score}</li>
				<li>Compared to national average: {harborviewList.compared_to_national}</li>
				<li>Denominator: {harborviewList.denominator}</li>
				<li>Percentage higher: {harborviewList.higher_estimate}</li>
				<li>Percentage lower: {harborviewList.lower_estimate}</li>
			</ul>		
			)}	
			</div>
			
		<div className="hospital" id="swedish">
			<img src={swedishImg} alt={"Swedish"}/> 
			{ this.state.hospital500027.map(swedishList =>
			<ul className="data-ul">
				<li className="hospitalname">Swedish Hospital</li>			
				<li className="category">Category: {swedishList.measure_name}</li>
				<li>Score: {swedishList.score}</li>
				<li>Compared to national average: {swedishList.compared_to_national}</li>
				<li>Denominator: {swedishList.denominator}</li>
				<li>Percentage higher: {swedishList.higher_estimate}</li>
				<li>Percentage lower: {swedishList.lower_estimate}</li>
			</ul>		
			)}
			</div>
			
		
		<div class="hospital" id="northwest">
			<img src={northwestImg} alt={"Northwest Hospital"}/> 
			{ this.state.hospital500001.map(NorthwestList =>
			<ul class="data-ul">
				<li class="hospitalname">Northwest Hospital</li>		
				<li class="category">Category: {NorthwestList.measure_name}</li>
				<li>Score: {NorthwestList.score}</li>
				<li>Compared to national average: {NorthwestList.compared_to_national}</li>
				<li>Denominator: {NorthwestList.denominator}</li>
				<li>Percentage higher: {NorthwestList.higher_estimate}</li>
				<li>Percentage lower: {NorthwestList.lower_estimate}</li>
			</ul>		
			)}
			</div>

		<div class="hospital" id="virginiamason">
			<img src={virginiamasonImg} alt={"Virginia Mason"}/> 
			{ this.state.hospital500005.map(VirginiaList =>
			<ul class="data-ul">
				<li class="hospitalname">Virginia Mason</li>
				<li class="category">Category: {VirginiaList.measure_name}</li>
				<li>Score: {VirginiaList.score}</li>
				<li>Compared to national average: {VirginiaList.compared_to_national}</li>
				<li>Denominator: {VirginiaList.denominator}</li>
				<li>Percentage higher: {VirginiaList.higher_estimate}</li>
				<li>Percentage lower: {VirginiaList.lower_estimate}</li>
			</ul>		
			)}
			</div>

		<div class="hospital" id="uwmc">
			<img src={uwmcImg} alt={"uwmc"}/> 
			{ this.state.hospital500008.map(UWMCList =>
			<ul class="data-ul">
				<li class="hospitalname">UW Medical Center</li>		
				<li class="category">Category: {UWMCList.measure_name}</li>
				<li>Score: {UWMCList.score}</li>
				<li>Compared to national average: {UWMCList.compared_to_national}</li>
				<li>Denominator: {UWMCList.denominator}</li>
				<li>Percentage higher: {UWMCList.higher_estimate}</li>
				<li>Percentage lower: {UWMCList.lower_estimate}</li>
			</ul>		
			)}
			</div>

		<div class="hospital" id="valley">
			<img src={valleyImg} alt={"Valley Medical Center"}/> 
			{ this.state.hospital500088.map(ValleyList =>
			<ul class="data-ul">
				<li class="hospitalname">Valley Medical Center</li>		
				<li class="category">Category: {ValleyList.measure_name}</li>
				<li>Score: {ValleyList.score}</li>
				<li>Compared to national average: {ValleyList.compared_to_national}</li>
				<li>Denominator: {ValleyList.denominator}</li>
				<li>Percentage higher: {ValleyList.higher_estimate}</li>
				<li>Percentage lower: {ValleyList.lower_estimate}</li>
			</ul>		
			)}
			</div>
		</div>
	</div>
    )
  }
}

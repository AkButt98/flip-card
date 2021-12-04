
import './App.css';


function App() {
  return (
<>
   <div class="content-container">
	
		<input class="pricing" type="checkbox" id="pricing"       name="pricing"/>

		<label for="pricing">
        <span class="block-diff">Front Card<span            class="float-right">Back Card
        </span></span>
    </label>

		<div class="card-3d-wrap mx-auto">
			<div class="card-3d-wrapper">
				<div class="card-front">
					<div class="pricing-wrap">
						<h4>Hello front</h4>
			    </div>
			  </div>
			  <div class="card-back">
				  <div class="pricing-wrap">
						<h4>Hello Back</h4>
				  </div>
			  </div>
		  </div>
	  </div>
 </div>
		      
</>
  );
}

export default App;

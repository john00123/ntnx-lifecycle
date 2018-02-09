const popBase = `
  <div class='overlay' style='display:none;'>
    <div class='popup'>
    </div>
  </div>
`
const header = [
  `<div class='popup-header'>
    Options
  </div>`
  ,
  `<div class='popup-header'>
    Software Component
  </div>`
  ,
  `<div class='popup-header'>
    LCM Required Update
  </div>`
]

const body = [
  //0 options menu
  `<div class='popup-body'>
    <h3 style='font-weight:500'>Image locations</h3>
    <div class='row'>
      <label for='location' >Image store URL</label>

    </div>
    <input type='text'/>

  <div class='separator' style='margin-top:10px'/>

    <h3 style='font-weight:500'>Look for updates</h3>
    <div class='row'>
      <label for='date'>Start Date</label>
      <label for='date' style='padding-left:20px;'> Time</label>
    </div>
    <div class='row'>
      <input type='text' style=" margin-right: 20px;"/>
      <input type='text' style=" align-self: flex-start;"/>
    </div>
    <label for='date'>Repeat every</label>
      <div class='row'>
        <input type='number' style='border-radius:4px 0 0 4px'/>
        <button class='file-button' style='margin-left:-1px'>Days</button>
      </div>
    <div class='separator' style='margin-top:20px'/>
    <div class='row'>
      <input type='checkbox' checked='checked'/> Enable LCM Auto Update</div>
  </div>`
  ,
  //1 edit menu
  `<div class='popup-body'>
  <details style='width:100%; direction:ltr;'>
    <summary>
      <input type='checkbox'/>
      Cluster 1
    </summary>
    Node 1
  </details>

  <details style='width:100%'>
    <summary>
      <input type='checkbox'/>
      Cluster 2
    </summary>
    Node 1
  </details>

  <details style='width:100%'>
    <summary>
      <input type='checkbox'/>
      Cluster 3
    </summary>
    Node 1
  </details>

  </div>`
  ,

  //1 edit menu
  `
  <div class='popup-body'>
    <h3> LCM requires to be on the latest version in order to allow other modules to be updated. LCM module will auto update after version 1.2.3. </br>
    <p>You can disable this action on under Options > Auto-Update</p></h3>
  </div>
  `
  ,
]


const footer = [
  `<div class='popup-footer'>
    <button style='margin-right:10px' class='secondary cancel'>Cancel</button>
    <button class='primary'>Save</button>
  </div>`
  ,

  `<div class='popup-footer'>
    <button style='margin-right:10px' class='secondary cancel'>Cancel</button>
    <button class='primary'>Update</button>

  </div>`
  ,

]

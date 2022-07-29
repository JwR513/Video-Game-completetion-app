export default function Devs(props){
  
    return(
  <div>
      <section className='single-dev'>
        <h3>Studio: {props.dev.studioName}</h3>
        <h3>Ceo: {props.dev.ceoName}</h3>
      </section>
  </div>
  )
  
  }
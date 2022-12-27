import '../App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import FormList from './FormList'
const Content = () => {
  return (
    <div className='header__content'>
      <div className='header__sub-title'>
        <h1 className='header__content__title'>
          Unlimited movies, TV shows, and more.
        </h1>
      </div>
      <p className='header__sub-text'></p>

      <div className=' m-4 form-data'>
        <FormList />
      </div>
    </div>
  )
}

export default Content

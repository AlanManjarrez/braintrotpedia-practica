import BrainrotsDisplay from "../components/brainrot-display"

const HomePage = () => {
  return (
    <div className="container mx-auto my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <BrainrotsDisplay />
        </div>
      </div>
    </div>

  )
}
export default HomePage
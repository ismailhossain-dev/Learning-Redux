import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment } from './redux/counter/counterSlice'

function App() {
  //===store.ts er morde amr reducer take counter er morde rakchilam tai amra couter teke value ta nitechi==============
  const value = useSelector((state)=> state.counter.value)

  //dispatch ta use korbo jei value ta chage korte chai sekane like increment
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-3xl text-red-500 font-bold mb-8">
       Hello Redux
      </div>

      {/* Counter UI Card */}
      <div className="flex flex-col items-center p-8 bg-white shadow-md rounded-xl border border-gray-200 gap-6">
        <h2 className="text-xl font-semibold text-gray-700">Counter App</h2>
        
        {/* Counter Display */}
        <div className="text-6xl font-extrabold text-gray-900">
        {value}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-2.5 bg-gray-200 text-gray-700 font-medium rounded-lg shadow hover:bg-gray-300 transition">
            - Decrement
          </button>
          <button onClick={()=>dispatch(increment)} className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
            + Increment
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default App

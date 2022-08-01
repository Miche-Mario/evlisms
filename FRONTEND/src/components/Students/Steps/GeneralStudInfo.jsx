import React, { useContext } from 'react'
import { StepperContext } from '../../../contexts/stepperContext'


const GeneralStudInfo = () => {
  const { studentData, setStudentData } = useContext(StepperContext)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value })
  }
  return (
    <div className='flex flex-row justify-between'>
      <div class=" bg-white w-full  border border-blue-300 p-3 pb-0">

        <form>
          <div class="grid gap-3 mb-6 lg:grid-cols-3">
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Student ID</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="EVLI------" required
                onChange={handleChange}
                name="studentId"
                value={studentData["studentId"] || ""}

              />
            </div>
            <div>
              <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900   ">Surname</label>
              <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="MENOU" required 
                onChange={handleChange}
                name="surname"
                value={studentData["surname"] || ""}
              />
            </div>
            <div>
              <label for="company" class="block mb-2 text-sm font-medium text-gray-900   ">Forenames</label>
              <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Gael" required 
                onChange={handleChange}
                name="forenames"
                value={studentData["forenames"] || ""}
              />
            </div>
            <div>
              <label for="phone" class="block mb-2 text-sm font-medium text-gray-900   ">Gender</label>
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={handleChange}
                name="gender"
                value={studentData["gender"] || ""}
              >
                <option></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label for="dateofbirth" class="block mb-2 text-sm font-medium text-gray-900 ">Date of Birth</label>
              <input type="date" id="dateofbirth" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required 
                onChange={handleChange}
                name="dateOfBirth"
                value={studentData["dateOfBirth"] || ""}
              />
            </div>
            <div>
              <label for="placeofbirth" class="block mb-2 text-sm font-medium text-gray-900 ">Place of Birth</label>
              <input type="text" id="placeofbirth" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Cotonou" required 
                onChange={handleChange}
                name="placeOfBirth"
                value={studentData["placeOfBirth"] || ""}
              />
            </div>
            <div>
              <label for="Citizenship" class="block mb-2 text-sm font-medium text-gray-900 ">Citizenship</label>
              <input type="text" id="Citizenship" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Cotonou" required 
                onChange={handleChange}
                name="citizenship"
                value={studentData["citizenship"] || ""}
              />
            </div>
            <div>
              <label for="occupation" class="block mb-2 text-sm font-medium text-gray-900">Occupation</label>
              <input type="text" id="occupation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Student" required 
                onChange={handleChange}
                name="occupation"
                value={studentData["occupation"] || ""}
              />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email Adress</label>
              <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="johndoe@mail.com" required 
                onChange={handleChange}
                name="email"
                value={studentData["email"] || ""}
              />
            </div>
            <div>
              <label for="phonehome" class="block mb-2 text-sm font-medium text-gray-900   ">Tel. (Home)</label>
              <input type="text" id="phonehome" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required 
                onChange={handleChange}
                name="phoneHome"
                value={studentData["phoneHome"] || ""}
              />
            </div>
            <div>
              <label for="phoneghana" class="block mb-2 text-sm font-medium text-gray-900   ">Tel. (Ghana)</label>
              <input type="text" id="phoneghana" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required 
                onChange={handleChange}
                name="phoneGhana"
                value={studentData["phoneGhana"] || ""}
              />
            </div>
            <div>
              <label for="adresshome" class="block mb-2 text-sm font-medium text-gray-900   ">Adresse (Home)</label>
              <input type="text" id="adresshome" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123 Cotonou, Benin" required 
                onChange={handleChange}
                name="adressHome"
                value={studentData["adressHome"] || ""}
              />
            </div>
            <div>
              <label for="adressghana" class="block mb-2 text-sm font-medium text-gray-900   ">Adresse. (Ghana)</label>
              <input type="text" id="adressghana" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123 Achimota, Accra, Ghana" required 
                onChange={handleChange}
                name="adressGhana"
                value={studentData["adressGhana"] || ""}
              />
            </div>
            <div>
              <label for="marital" class="block mb-2 text-sm font-medium text-gray-900">Marital Status</label>
              <input type="text" id="marital" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Single" required 
                onChange={handleChange}
                name="maritalStatus"
                value={studentData["maritalStatus"] || ""}
              />
            </div>
            <div>
              <label for="passport" class="block mb-2 text-sm font-medium text-gray-900 ">Passeport/ID No</label>
              <input type="text" id="passport" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-33-33" required 
                onChange={handleChange}
                name="passport"
                value={studentData["passport"] || ""}
              />
            </div>
            <div>
              <label for="academiclevel" class="block mb-2 text-sm font-medium text-gray-900">Academic Level</label>
              <input type="text" id="academiclevel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Bachelor" required 
                onChange={handleChange}
                name="academicLevel"
                value={studentData["academicLevel"] || ""}
              />
            </div>
            <div>
              <label for="note" class="block mb-2 text-sm font-medium text-gray-900">Note</label>
              <input type="text" id="note" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required 
                onChange={handleChange}
                name="note"
                value={studentData["note"] || ""}
              />
            </div>
            <div>
              <label for="about" class="block mb-2 text-sm font-medium text-gray-900">How did you hear about EVLI</label>
              <select id="about" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={handleChange}
                name="about"
                value={studentData["about"] || ""}
              >
                <option></option>
                <option value="US">Facebook</option>
                <option value="CA">Instagram</option>
                <option value="FR">Internet Search</option>
                <option value="DE">Twitter</option>
                <option value="DE">Flyer</option>
                <option value="DE">School Sign</option>
                <option value="DE">Friend</option>
                <option value="DE">Agent</option>
              </select>
            </div>
          </div>
        </form>

      </div>
      <div class="ml-6">

        <div class="flex items-center justify-center w-full">
          <label for="dropzone-file" class="flex text-center flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" 
              onChange={handleChange}
              name="passportPhoto"
              value={studentData["passportPhoto"] || ""}
            />
          </label>
        </div>

        <p class="mt-2 text-center">Passport Photograph</p>

        <div class="flex items-center justify-center w-full">
          <label for="dropzone-file" class="flex text-center flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" 
              onChange={handleChange}
              name="idScan"
              value={studentData["idScan"] || ""}
            />
          </label>
        </div>

        <p class="mt-2 text-center">ID SCAN</p>

      </div>
    </div>
  )
}

export default GeneralStudInfo
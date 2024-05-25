import EmailIcon from "@/assets/reshot-icon-email.svg";
import PhoneIcon from "@/assets/reshot-icon-phone.svg";

import Image from "next/image";

async function fetchUserDetails(id) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch user details or incorrect user id number");
  }
  const data = await res.json();
  return data;
}

export default async function UserDetails({ params }) {
  console.log("UserDetails - params", params); // UserDetails - params { details: '4' }

  console.log(params.details); // 4

  const user = await fetchUserDetails(params.details);

  return (
    <>
      {user && (
        <div className="bg-gray-100 p-4">
          <div className="border-1 shadow-lg shadow-gray-700 rounded-lg">
            {/* top content */}
            <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
              <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
                <Image
                  src={user.image}
                  alt={user.firstName}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
                <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-heading">
                  {user.role} - {user.company.name} - {user.company.department}
                </p>
              </div>
            </div>
            {/* main content */}
            <div className="p-5">
              <div className="flex flex-col sm:flex-row sm:mt-10">
                <div className="flex flex-col sm:w-1/3">
                  {/* My contact */}
                  <div className="py-3 sm:order-none order-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">
                      Personaility
                    </h2>
                    <div className="border-2 w-20 border-top-color my-3" />
                    <div>
                      <div className="flex items-center my-1">
                        <a className="w-6 text-gray-700 hover:text-orange-600">
                          <Image
                            priority
                            src={EmailIcon}
                            alt="Email Icon"
                            width={25}
                            height={25}
                          />
                        </a>
                        <div className="ml-2 truncate">{user.email}</div>
                      </div>
                      <div className="flex items-center my-1">
                        <a
                          className="w-6 text-gray-700 hover:text-orange-600"
                          aria-label="Visit TrendyMinds YouTube"
                          href=""
                          target="_blank"
                        >
                          <Image
                            priority
                            src={PhoneIcon}
                            alt="Phone Icon"
                            width={25}
                            height={25}
                          />
                        </a>
                        <div>{user.phone}</div>
                      </div>
                    </div>
                    <div className="w-1/2 h-2 border-0 bg-red-300 my-3"></div>
                    <p>
                      <span className="font-bold p-2 ml-1">Birth Data:</span>
                      <span>{user.birthDate}</span>
                    </p>
                    <p>
                      <span className="font-bold p-2 ml-1">Age:</span>
                      <span>{user.age}</span>
                    </p>
                    <p>
                      <span className="font-bold p-2 ml-1">Gender:</span>
                      <span>{user.gender}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
                  {/* About me */}
                  <div className="py-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">
                      Address Information
                    </h2>
                    <div className="border-2 w-20 border-top-color my-3" />
                    <p>
                      <span>Address: </span> <span>{user.address.address}</span>
                    </p>
                    <p>
                      <span>City: </span> <span>{user.address.city}</span>
                    </p>
                    <p>
                      <span>State/Code - Postal: </span>{" "}
                      <span>
                        {user.address.state}/{user.address.stateCode} -{" "}
                        {user.address.postalCode}
                      </span>
                    </p>
                    <p className="text-lg font-bold text-gray-700">
                      <span>Country:</span>
                      <span className="font-bold px-1 ml-2">{user.address.country}</span>
                    </p>
                  </div>
                  {/* Physical/Body Information */}
                  <div className="py-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">
                      Physical/Body Information
                    </h2>
                    <div className="border-2 w-20 border-top-color my-3" />
                    <div className="flex flex-col">
                      <div className="flex flex-col">
                        <p className="text-lg font-bold text-gray-700">
                          <span>Height:</span>
                          <span className="font-bold px-1 ml-2">
                            {user.height}
                          </span>
                        </p>
                        <p className="text-lg font-bold text-gray-700">
                          <span>Weight:</span>
                          <span className="font-bold px-1 ml-2">
                            {user.weight}
                          </span>
                        </p>
                        <p className="text-lg font-bold text-gray-700">
                          <span>Blood Group:</span>
                          <span className="font-bold px-1 ml-2">
                            {user.bloodGroup}
                          </span>
                        </p>
                        <p className="text-lg font-bold text-gray-700">
                          <span>Eye Color:</span>
                          <span className="font-bold px-1 ml-2">
                            {user.eyeColor}
                          </span>
                        </p>
                        <p className="text-lg font-bold text-gray-700">
                          <span>Hair:</span>
                          <span className="font-bold px-1 ml-2">
                            {user.hair.color} - {user.hair.type}
                          </span>
                        </p>
                        <p className="text-lg font-bold text-gray-700">
                          <span>Weight:</span>
                          <span className="font-bold px-1 ml-2">
                            {user.weight}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Projects */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function Newsletter() {
  return (
    <div style={{ position: 'relative', top: '40px', zIndex: '2' }}>
      <div className="flex w-full justify-center">
        <div className="flex w-5/6 flex-col items-center justify-between border-b bg-chainSecondary rounded-lg py-10">
          <label htmlFor="email" className="block text-black font-normal text-4xl">Stay Updated with Our Latest Developments</label>
          <div className="mt-1 flex">
            <input
              type="email"
              id="email"
              className="shadow-sm flex sm:text-sm border-gray-300 rounded-md w-[600px] h-14"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="ml-2 mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primaryButton focus:outline-none  w-[124px] h-10"
            >
              <span className="pt-0,5">Join Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

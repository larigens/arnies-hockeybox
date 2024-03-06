import Link from 'next/link';

const Subscription = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <h2 className="text-center text-3xl font-extrabold">Choose Your Subscription Tier</h2>
        <div className="mt-8 space-y-6">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
              <div>
                <h3 className="text-center text-2xl leading-8 font-semibold text-gray-900">Basic</h3>
                <p className="mt-4 text-lg text-gray-500 text-center">$9.99/month</p>
              </div>
              <div className="mt-6">
                <Link href="/checkout/basic">
                  <p className="block w-full px-4 py-2 border border-transparent text-center text-xl font-semibold rounded-full text-white bg-brand hover:bg-secondary hover:text-brand">
                    Subscribe Now
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
              <div>
                <h3 className="text-center text-2xl leading-8 font-semibold text-gray-900">Standard</h3>
                <p className="mt-4 text-lg text-gray-500 text-center">$19.99/month</p>
              </div>
              <div className="mt-6">
                <Link href="/checkout/standard">
                  <p className="block w-full px-4 py-2 border border-transparent text-center text-xl font-semibold rounded-full text-white bg-brand hover:bg-secondary hover:text-brand">
                    Subscribe Now
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
              <div>
                <h3 className="text-center text-2xl leading-8 font-semibold text-gray-900">Premium</h3>
                <p className="mt-4 text-lg text-gray-500 text-center">$29.99/month</p>
              </div>
              <div className="mt-6">
                <Link href="/checkout/premium">
                  <p className="block w-full px-4 py-2 border border-transparent text-center text-xl font-semibold rounded-full text-white bg-brand hover:bg-secondary hover:text-brand">
                    Subscribe Now
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

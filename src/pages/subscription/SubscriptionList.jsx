import React from 'react';

const SubscriptionList = () => {
  // Sample data for subscriptions
  const subscriptions = [
    {
      id: 1,
      user: 'Ruchir Shah',
      package: 'Gold Subscription Plan',
      totalAmount: '$2999.00',
      paymentType: 'razorpay',
      subscriptionStartDate: 'May 19, 2025 8:42 AM',
      subscriptionEndDate: 'June 19, 2025 8:42 AM',
      cancelledDate: '-',
      status: 'Active'
    },
    {
      id: 2,
      user: 'Donald Trump',
      package: 'Gold Subscription Plan',
      totalAmount: '$2999.00',
      paymentType: 'razorpay',
      subscriptionStartDate: 'May 7, 2025 10:53 AM',
      subscriptionEndDate: 'June 7, 2025 10:53 AM',
      cancelledDate: '-',
      status: 'Active'
    },
    {
      id: 3,
      user: 'Donald Trump',
      package: 'Gold Subscription Plan',
      totalAmount: '$2999.00',
      paymentType: 'razorpay',
      subscriptionStartDate: 'May 7, 2025 10:32 AM',
      subscriptionEndDate: 'June 7, 2025 10:32 AM',
      cancelledDate: 'May 7, 2025 10:53 AM',
      status: 'Inactive'
    },
    {
      id: 4,
      user: 'Donald Trump',
      package: 'Gold Subscription Plan',
      totalAmount: '$2999.00',
      paymentType: 'razorpay',
      subscriptionStartDate: 'May 7, 2025 10:24 AM',
      subscriptionEndDate: 'June 7, 2025 10:24 AM',
      cancelledDate: 'May 7, 2025 10:31 AM',
      status: 'Inactive'
    },
    {
      id: 5,
      user: 'Donald Trump',
      package: 'Gold Subscription Plan',
      totalAmount: '$2999.00',
      paymentType: 'razorpay',
      subscriptionStartDate: 'May 7, 2025 10:17 AM',
      subscriptionEndDate: 'June 7, 2025 10:17 AM',
      cancelledDate: 'May 7, 2025 10:24 AM',
      status: 'Inactive'
    },
    {
      id: 6,
      user: 'Donald Trump',
      package: 'Gold Subscription Plan',
      totalAmount: '$2999.00',
      paymentType: 'razorpay',
      subscriptionStartDate: 'May 7, 2025 9:46 AM',
      subscriptionEndDate: 'June 7, 2025 9:46 AM',
      cancelledDate: 'May 7, 2025 10:16 AM',
      status: 'Inactive'
    },
    {
      id: 7,
      user: 'Donald Trump',
      package: 'Mamiti',
      totalAmount: '$5000.00',
      paymentType: 'razorpay',
      subscriptionStartDate: 'May 7, 2025 7:22 AM',
      subscriptionEndDate: 'August 7, 2025 7:22 AM',
      cancelledDate: 'May 7, 2025 9:45 AM',
      status: 'Inactive'
    },
    {
      id: 8,
      user: 'Ahmed Said',
      package: 'Elite Property Plan',
      totalAmount: '$0.00',
      paymentType: 'razorpay',
      subscriptionStartDate: 'May 4, 2025 11:15 AM',
      subscriptionEndDate: 'June 4, 2025 11:15 AM',
      cancelledDate: '-',
      status: 'Active'
    },
    {
      id: 9,
      user: 'Donald Trump',
      package: 'Gold Subscription Plan',
      totalAmount: '$2999.00',
      paymentType: 'razorpay',
      subscriptionStartDate: 'April 30, 2025 9:21 AM',
      subscriptionEndDate: 'May 30, 2025 9:21 AM',
      cancelledDate: 'May 7, 2025 6:46 AM',
      status: 'Inactive'
    },
    {
      id: 10,
      user: 'Hilda Blink',
      package: 'Elite Property Plan',
      totalAmount: '$0.00',
      paymentType: 'razorpay',
      subscriptionStartDate: 'April 9, 2025 9:07 AM',
      subscriptionEndDate: 'May 9, 2025 9:07 AM',
      cancelledDate: '-',
      status: 'Inactive'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Subscription List</h1>
        <input type="text" placeholder="Search" className="border rounded p-2" />
      </div>
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subscription Start Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subscription End Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cancelled Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subscriptions.map((subscription, index) => (
              <tr key={subscription.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{subscription.user}</td>
                <td className="px-6 py-4 whitespace-nowrap">{subscription.package}</td>
                <td className="px-6 py-4 whitespace-nowrap">{subscription.totalAmount}</td>
                <td className="px-6 py-4 whitespace-nowrap">{subscription.paymentType}</td>
                <td className="px-6 py-4 whitespace-nowrap">{subscription.subscriptionStartDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{subscription.subscriptionEndDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{subscription.cancelledDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${subscription.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {subscription.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionList;

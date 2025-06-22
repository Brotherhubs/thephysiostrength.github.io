import PlanCard from './PlanCard';
import { Plan } from '@/types';

export default function PlanCards({ plans }: { plans: Plan[] }) {
  return (
    <>
      <div className="text-center mt-10 mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-800 tracking-tight">
          Physiotherapy Treatment Plans
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-x-6 items-stretch py-8 px-4 sm:px-6 lg:px-8">
        {plans.map((plan: Plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </>
  )
}
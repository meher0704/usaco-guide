import { Link } from 'gatsby';
import * as React from 'react';
import useSuffix from './useSuffix';

const LinksToEdit = ({ className = null as string | null }) => {
  return (
    <Link
      to={`/editor/?filepath=${useSuffix()}`}
      target="_blank"
      className={className ?? undefined}
    >
      Edit this page
      <svg
        className="mb-1 ml-1 inline-block h-5 w-4 text-gray-400 group-hover:text-blue-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </Link>
  );
};

export default LinksToEdit;

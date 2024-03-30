import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type UseSearchParamsActionProps = {
  query: string;
  value: string;
  action: () => void;
};

export const useSearchParamsAction = ({
  query,
  value,
  action,
}: UseSearchParamsActionProps) => {
  const [searchParams] = useSearchParams();
  const [isMatch, setIsMatch] = useState(false);

  const queryParam = searchParams.get(query);

  useEffect(() => {
    if (queryParam === value) {
      setIsMatch(true);
      action();
    }
  }, [queryParam, value, action]);

  return { isMatch };
};

import { GETOrganizationUsers } from "api/hospital";
import { SelectInput } from "components/select/select";
import { ISelectProps } from "components/select/types";
import { useEffect, useMemo, useState, type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOrganizationUsers } from "state-manager/reducer/hospital";
import { RootState } from "state-manager/store";

interface IUserSelectProps
  extends Omit<ISelectProps, "options" | "isLoading" | "value" | "onChange"> {
  userId: string | null | undefined;
  onChange: (id: string | null) => void;
}

export const UserSelect: FC<IUserSelectProps> = ({ ...props }) => {
  const { onChange, userId } = props;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.hospital);

  useEffect(() => {
    setIsLoading(true);
    GETOrganizationUsers().then((res) => {
      dispatch(changeOrganizationUsers(res));
      setIsLoading(false);
    });
  }, []);

  const usersOptions: IGSelectOption[] = useMemo(() => {
    return users.map((user) => ({
      label: user.firstName + " " + user.lastName,
      value: `${user.id}`,
    }));
  }, [users]);

  const userValue = () => {
    const option = usersOptions.find((option) => option.value === userId);
    if (option) {
      return {
        label: option.label,
        value: option.value,
      };
    } else {
      return null;
    }
  };

  const onChangeUser = (user: IGSelectOption) => {
    onChange(user?.value || null);
  };

  return (
    <SelectInput
      {...props}
      isLoading={isLoading}
      options={usersOptions}
      value={userValue()}
      onChange={onChangeUser}
    />
  );
};

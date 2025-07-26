import { Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>{title}</Text>
      <View className={styles.separator} />
      <EditScreenInfo path={path} />

      <Text className="text-3xl font-IBMPlexSerif font-light">hello world (light)</Text>
      <Text className="text-2xl font-IBMPlexSerif font-normal">bye world (normal)</Text>
      <Text className="text-xl font-IBMPlexSerif font-medium">medium text</Text>
      <Text className="text-lg font-IBMPlexSerif font-semibold">semibold text</Text>
      <Text className="text-base font-IBMPlexSerif font-bold">bold text</Text>
      {children}
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};

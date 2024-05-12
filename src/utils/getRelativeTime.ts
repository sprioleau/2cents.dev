import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function getRelativeTime(date: Date): string {
	return dayjs(new Date(date).getTime()).fromNow();
}

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const TIMEZONE_OFFSET = 4 * 60 * 60 * 1000;

export default function getRelativeTime(dateString: string): string {
	return dayjs(new Date(dateString).getTime() - TIMEZONE_OFFSET).fromNow();
}

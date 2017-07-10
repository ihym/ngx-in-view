/**
 * Interface of the configuration object
 */
export interface IInViewConfig {

	offset?: number | {top: number, right: number, bottom: number, left: number};

	threshold?: number;

	test?: Function;

}

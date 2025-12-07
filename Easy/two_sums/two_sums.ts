function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let l = 0; l < nums.length; l++) {
        const compl = target - nums[l];

        if (map.has(compl)) {
            return [map.get(compl)!, l];
        }

        map.set(nums[l], l);
    }
    throw new Error("no solution was found")
};
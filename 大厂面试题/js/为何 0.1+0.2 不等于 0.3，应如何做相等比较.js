// 0.1，0.2 表示为二进制会有精度的损失，比较时可引入一个很小的数值 Number.EPSILON 容忍误差，其值为 2^-52

Math.abs(a - b) < Number.EPSILON //(2^-52)
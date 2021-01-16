#Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

#Your task is to make 'Past' function which returns time converted to milliseconds.

#Example:
#run_shell(args: [0, 1, 1]) == 61000
#Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59

h=$1
m=$2
s=$3

echo $(($h*3600000 + $m*60000 + $s*1000))

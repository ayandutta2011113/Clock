#!/usr/bin/python3

import time
from datetime import datetime
import pytz

# Define IST time zone
ist = pytz.timezone('Asia/Kolkata')

# Get the current time in IST
current_time_ist = datetime.now(ist)

str = "Current time in India: " + current_time_ist.strftime("%Y-%m-%d %H:%M:%S")

print(str)

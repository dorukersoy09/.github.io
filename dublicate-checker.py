import re
from collections import Counter

def check_duplicates():
    print("Paste your data (e.g. AKD0023001 BTE1204901), using spaces, commas, tabs, or newlines to separate.")
    print("Press Enter on an empty line to finish input.")

    raw_input = ""
    while True:
        try:
            line = input()
            if line.strip() == "":
                break
            raw_input += " " + line
        except EOFError:
            break

    # Split and match only full elements: starts with letters, ends with digits
    tokens = re.split(r'[,\s\t]+', raw_input.strip())
    data = [match for token in tokens for match in re.findall(r'[A-Za-z]+[0-9]+', token)]

    row = len(data)
    counts = Counter(data)
    duplicates = {item: count for item, count in counts.items() if count > 1}
    duplicate_count = sum(count - 1 for count in counts.values() if count > 1)

    print(f"\n🔢 Total elements: {row}")
    print(f"🔁 Duplicate count (extra appearances only): {duplicate_count}")

    if duplicates:
        print("🧾 Duplicate items and their counts:")
        for item, count in duplicates.items():
            print(f"   - {item}: {count} times")
    else:
        print("✅ No duplicates found.")

# Run it
check_duplicates()

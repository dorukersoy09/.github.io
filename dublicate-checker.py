def check_duplicates():
    print("Paste all your data (e.g. akd0023001 bte1204901 ...) and press Enter:")
    
    raw_input = input("> ")
    
    # Split by spaces, commas, or newlines
    import re
    data = re.split(r'[,\s]+', raw_input.strip())
    
    seen = set()
    duplicates = set()

    for item in data:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)

    if duplicates:
        print("\n✅ Duplicates found:", duplicates)
    else:
        print("\n✅ No duplicates found.")

# Run it
check_duplicates()

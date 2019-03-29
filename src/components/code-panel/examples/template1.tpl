<b
  @click="$emit('click', {data: myNewVal})"
  @mouseover="$emit('mouseover', {data: myNewVal})"
>
  Emit a click with an object containing "{{ myNewVal }}" as data attribute, by the way this is the value of the entry otherVal : {{ otherVal }}
</b>